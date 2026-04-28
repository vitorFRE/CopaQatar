export interface WorldCupTeam {
  name: string;
  country: string;
  goals: number | null;
}

export interface MatchEvent {
  id: number;
  type_of_event: string;
  time: string;
  player: string;
}

export interface WorldCupMatch {
  id: number;
  datetime: string;
  status: string;
  stage_name?: string;
  home_team: WorldCupTeam;
  away_team: WorldCupTeam;
  home_team_country?: string | null;
  away_team_country?: string | null;
  home_team_events?: MatchEvent[];
  away_team_events?: MatchEvent[];
}

export interface GroupTeam extends WorldCupTeam {
  games_played: number;
  wins: number;
  losses: number;
  draws: number;
  goals_for: number;
  group_points: number;
}

export interface WorldCupGroup {
  letter: string;
  teams: [GroupTeam, GroupTeam, GroupTeam, GroupTeam];
}

export interface TeamsResponse {
  groups: WorldCupGroup[];
}
