import type { TeamsResponse, WorldCupMatch } from "../types/worldcup";

const BASE = "/data/editions/2022";

export async function loadMatches(): Promise<WorldCupMatch[]> {
  const response = await fetch(`${BASE}/matches.json`);
  if (!response.ok) {
    throw new Error(`Failed to load matches: ${response.status}`);
  }
  return response.json() as Promise<WorldCupMatch[]>;
}

export async function loadTeams(): Promise<TeamsResponse> {
  const response = await fetch(`${BASE}/teams.json`);
  if (!response.ok) {
    throw new Error(`Failed to load teams: ${response.status}`);
  }
  return response.json() as Promise<TeamsResponse>;
}

export async function loadMatchById(id: string): Promise<WorldCupMatch | undefined> {
  const matches = await loadMatches();
  const numericId = Number(id);
  return matches.find((m) => m.id === numericId || String(m.id) === id);
}

export async function loadMatchesTodayLike(): Promise<WorldCupMatch[]> {
  const matches = await loadMatches();
  const open = new Set([
    "future_scheduled",
    "future_unscheduled",
    "in_progress",
    "in progress",
  ]);
  return matches.filter((m) => open.has(m.status));
}

export async function loadMatchesCurrentLike(): Promise<WorldCupMatch[]> {
  const matches = await loadMatches();
  return matches.filter((m) => m.status === "in_progress" || m.status === "in progress");
}
