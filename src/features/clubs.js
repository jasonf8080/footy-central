// src/slices/userProfileSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiKey, apiKeyAlt, leagues } from '../utils/data';

/* Inital State */

const initialState = {
  showLeagues: false,
  activeLeague: '4332',

  league: {
    loading: false,
    data: {
      name: '',
      badge: '',
      country: ''
    },
    error: ''
  },

  results: {
    loading: false,
    data: [],
    error: ''
  },

  clubs: {
    loading: false,
    data: [],
    error: ''
  },

  standings: {
    loading: false,
    data: [],
    error: ''
  },

  stats: {
    loading: false,
    data: [],
    error: ''
  }
};
export const fetchLeagueInfo = createAsyncThunk("league/fetchLeagueInfo", async ({
  activeLeague
}) => {
  try {
    const url = `https://www.thesportsdb.com/api/v1/json/123/lookupleague.php?id=${activeLeague}`;
    const response = await fetch(url);
    const data = await response.json();
    const {
      strLeagueAlternate: name,
      strBadge: badge,
      strCountry: country
    } = data.leagues[0];
    console.log(country);
    return {
      name: name.split(',')[0],
      badge,
      country,
      loading: false
    };
  } catch (error) {
    console.error(error);
    return {
      name: "",
      badge: "",
      loading: false,
      country: ''
    };
  }
});
export const fetchResults = createAsyncThunk('fetchResults', async ({
  activeLeague
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/eventspastleague.php?id=${activeLeague}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newResults = data.events.map(item => {
      const {
        idEvent,
        strHomeTeam,
        strAwayTeam,
        strHomeTeamBadge,
        strAwayTeamBadge,
        intHomeScore,
        intAwayScore
      } = item;
      return {
        idEvent,
        homeTeam: strHomeTeam,
        awayTeam: strAwayTeam,
        homeBadge: strHomeTeamBadge,
        homeScore: intHomeScore,
        awayBadge: strAwayTeamBadge,
        awayScore: intAwayScore
      };
    });
    return newResults;
  } catch (error) {
    console.log(error);
    return [];
  }
});
export const fetchClubs = createAsyncThunk('fetchClubs', async ({
  activeLeague
}) => {
  try {
    const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${leagues.find(item => activeLeague === item.id)?.idAlt}`;
    const response = await fetch(url);
    const data = await response.json();
    const newClubs = data.teams.map(item => {
      const {
        idTeam,
        strTeam,
        strBadge,
        strStadium,
        strColour1
      } = item;
      return {
        logo: strBadge,
        name: strTeam,
        id: idTeam,
        stadium: strStadium,
        color: strColour1
      };
    });
    return newClubs;
  } catch (error) {
    console.error('Error fetching clubs:', error);
    return []; // Return an empty array in case of failure
  }
});
export const fetchStandings = createAsyncThunk('fetchStandings', async ({
  activeLeague
}) => {
  try {
    const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptable.php?l=${activeLeague}&s=2025-2026`;
    const response = await fetch(url);
    const data = await response.json();
    const newStandings = data.table.map(item => {
      const {
        intRank,
        idTeam,
        strBadge,
        strForm,
        strTeam,
        intPlayed,
        intWin,
        intLoss,
        intDraw,
        intGoalsFor,
        intGoalsAgainst,
        intGoalDifference,
        intPoints
      } = item;
      return {
        place: intRank,
        team: strTeam,
        id: idTeam,
        logo: strBadge,
        form: strForm,
        gamesPlayed: intPlayed,
        won: intWin,
        lost: intLoss,
        tie: intDraw,
        scored: intGoalsFor,
        conceded: intGoalsAgainst,
        points: intPoints,
        goalDifference: intGoalDifference
      };
    });

    return newStandings;
  } catch (error) {
    return [];
  }
});
export const fetchStats = createAsyncThunk('fetchStats', async ({
  activeLeague,
  activeStat
}) => {

  try {
    const response = await fetch(`https://v3.football.api-sports.io/players/${activeStat}?season=2025&league=${leagues.find(item => activeLeague === item.id)?.statsID}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-apisports-key": `${apiKeyAlt}`
      }
    });
    const data = await response.json();
    const newStats = data.response.map((item, index) => {
      const {
        player: {
          id,
          name
        },
        statistics: [{
          team: {
            name: teamName,
            logo
          },
          goals: {
            total
          }
        }]
      } = item;
      return {
        id: id.toString(),
        player: name,
        rank: index + 1,
        team: {
          name: teamName,
          logo: logo
        },
        stat: {
          name: 'goals',
          total
        }
      };
    });
    return newStats;
  } catch (error) {
    return [];
  }
});
const clubsSlice = createSlice({
  name: 'clubsSlice',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.showLeagues = !state.showLeagues;
    },
    changeActiveLeague: (state, action) => {
      state.activeLeague = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchLeagueInfo.pending, state => {
      state.league.loading = true;
    }).addCase(fetchLeagueInfo.fulfilled, (state, action) => {
      state.league.loading = false;
      state.league.data.name = action.payload.name;
      state.league.data.badge = action.payload.badge;
      state.league.data.country = action.payload.country;
    }).addCase(fetchLeagueInfo.rejected, state => {
      state.league.loading = false;
    }).addCase(fetchResults.pending, state => {
      state.results.loading = true;
    }).addCase(fetchResults.fulfilled, (state, action) => {
      state.results.loading = false;
      state.results.data = action.payload;
    }).addCase(fetchResults.rejected, state => {
      state.results.loading = false;
    })

    /* Clubs */.addCase(fetchClubs.pending, state => {
      state.clubs.loading = true;
    }).addCase(fetchClubs.fulfilled, (state, action) => {
      state.clubs.loading = false;
      state.clubs.data = action.payload;
    }).addCase(fetchClubs.rejected, state => {
      state.clubs.data = [];
    })

    /* Standings */.addCase(fetchStandings.pending, state => {
      state.standings.loading = true;
    }).addCase(fetchStandings.fulfilled, (state, action) => {
      state.standings.loading = false;
      state.standings.data = action.payload;
    }).addCase(fetchStandings.rejected, state => {
      state.standings.data = [];
    })

    /* Stats */.addCase(fetchStats.pending, state => {
      state.stats.loading = true;
    }).addCase(fetchStats.fulfilled, (state, action) => {
      state.stats.loading = false;
      state.stats.data = action.payload;
    }).addCase(fetchStats.rejected, state => {});
  }
});
export const {
  toggleMenu,
  changeActiveLeague
} = clubsSlice.actions;
export default clubsSlice.reducer;