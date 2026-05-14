import { getEditionConfig, type EditionSlug } from '../edition/editionConfig';
import type { TeamsResponse, WorldCupMatch } from '../types/worldcup';

async function loadJson<T>(edition: EditionSlug, fileName: string): Promise<T> {
  const config = getEditionConfig(edition);

  if (!config) {
    throw new Error(`Unsupported edition: ${edition}`);
  }

  const response = await fetch(`${config.dataPath}/${fileName}`);

  if (!response.ok) {
    throw new Error(`Failed to load ${fileName}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function loadMatches(edition: EditionSlug): Promise<WorldCupMatch[]> {
  return loadJson<WorldCupMatch[]>(edition, 'matches.json');
}

export async function loadTeams(edition: EditionSlug): Promise<TeamsResponse> {
  return loadJson<TeamsResponse>(edition, 'teams.json');
}

export async function loadMatchById(
  edition: EditionSlug,
  id: string,
): Promise<WorldCupMatch | undefined> {
  const matches = await loadMatches(edition);
  const numericId = Number(id);

  return matches.find((match) => match.id === numericId || String(match.id) === id);
}

export async function loadMatchesTodayLike(edition: EditionSlug): Promise<WorldCupMatch[]> {
  const matches = await loadMatches(edition);
  const openStatuses = new Set([
    'future_scheduled',
    'future_unscheduled',
    'in_progress',
    'in progress',
  ]);

  return matches.filter((match) => openStatuses.has(match.status));
}

export async function loadMatchesCurrentLike(edition: EditionSlug): Promise<WorldCupMatch[]> {
  const matches = await loadMatches(edition);

  return matches.filter(
    (match) => match.status === 'in_progress' || match.status === 'in progress',
  );
}
