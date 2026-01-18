// src/slices/userProfileSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findPosition, filterAndSortGameStats } from '../utils/helpers';
import { apiKey } from '../utils/data';

/* Inital State */

const initialState = {
  gameInfo: {
    loading: false,
    data: {
      id: "",
      league: "",
      date: "",
      homeTeam: {
        name: "",
        logo: "",
        score: "",
        id: ""
      },
      awayTeam: {
        name: "",
        logo: "",
        score: "",
        id: ""
      },
      winner: null
    },
    error: ''
  },
  gameLineups: {
    loading: false,
    data: [],
    error: ''
  },
  gameStats: {
    loading: false,
    data: [],
    error: ''
  },
  gameEvents: {
    loading: false,
    data: [],
    error: ''
  }
};

//Game Info 
export const fetchGameInfo = createAsyncThunk('fetchGameInfo', async ({
  gameID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupevent.php?id=${gameID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const {
      idEvent: id,
      strLeague: league,
      dateEvent: date,
      strHomeTeam: homeTeamName,
      idHomeTeam: homeTeamID,
      strAwayTeam: awayTeamName,
      idAwayTeam: awayTeamID,
      intHomeScore: homeScore,
      intAwayScore: awayScore,
      strHomeTeamBadge: homeTeamBadge,
      strAwayTeamBadge: awayTeamBadge
    } = data.events[0];
    const newData = {
      id,
      league,
      date,
      homeTeam: {
        name: homeTeamName,
        id: homeTeamID,
        logo: homeTeamBadge,
        score: homeScore
      },
      awayTeam: {
        name: awayTeamName,
        id: awayTeamID,
        logo: awayTeamBadge,
        score: awayScore
      },
      winner: null
    };
    return newData;
  } catch (error) {
    return {
      id: "",
      league: "",
      date: "",
      homeTeam: {
        name: "",
        logo: "",
        score: "",
        id: ""
      },
      awayTeam: {
        name: "",
        logo: "",
        score: "",
        id: ""
      },
      winner: null
    };
  }
});

//Game Lineups
export const fetchGameLineups = createAsyncThunk('fetchGameLineups', async ({
  gameID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuplineup.php?id=${gameID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const newData = data.lineup.map(item => {
      const {
        strHome: isHome,
        strSubstitute: isSubstitute,
        strPosition: position,
        strPlayer: name,
        idPlayer: id,
        strTeam: team,
        strCutout: image,
        intSquadNumber: number
      } = item;
      return {
        isHome: isHome === 'Yes' ? true : false,
        isSubstitute,
        position,
        name,
        id,
        team,
        image,
        number,
        positionType: findPosition(position)
      };
    });
    return newData;
  } catch (error) {
    return [];
  }
});

//Game Stats
export const fetchGameStats = createAsyncThunk('fetchGameStats', async ({
  gameID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupeventstats.php?id=${gameID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.eventstats.map(item => {
      const {
        strStat: statType,
        intHome: homeStat,
        intAway: awayStat
      } = item;
      return {
        statType,
        homeStat: parseInt(homeStat),
        awayStat: parseInt(awayStat)
      };
    });
    const filteredStats = filterAndSortGameStats(newData);
    return filteredStats;
  } catch (error) {
    return [];
  }
});

//Game Events
export const fetchGameEvents = createAsyncThunk('fetchGameEvents', async ({
  gameID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptimeline.php?id=${gameID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.timeline.map(item => {
      const {
        idTimeline: id,
        strTimeline: type,
        strTimelineDetail: action,
        strHome: isHome,
        strPlayer: player,
        intTime: minute,
        idTeam: idTeam,
        strTeam: team
      } = item;
      return {
        id,
        type,
        action,
        isHome,
        player,
        minute,
        idTeam,
        team
      };

      //Filter out Subs and Var
    }).filter(item => item.type !== 'subst' && item.type !== 'Var');
    return newData;
  } catch (error) {
    return [];
  }
});
const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    //Game Info
    .addCase(fetchGameInfo.pending, state => {
      state.gameInfo.loading = true;
    }).addCase(fetchGameInfo.fulfilled, (state, action) => {
      state.gameInfo.loading = false;
      state.gameInfo.data = action.payload;
    }).addCase(fetchGameInfo.rejected, state => {
      state.gameInfo.loading = false;
    })

    //Game Lineups
    .addCase(fetchGameLineups.pending, state => {
      state.gameLineups.loading = true;
    }).addCase(fetchGameLineups.fulfilled, (state, action) => {
      state.gameLineups.loading = false;
      state.gameLineups.data = action.payload;
    }).addCase(fetchGameLineups.rejected, state => {
      state.gameLineups.loading = false;
    })

    //Game Stats
    .addCase(fetchGameStats.pending, state => {
      state.gameStats.loading = true;
    }).addCase(fetchGameStats.fulfilled, (state, action) => {
      state.gameStats.loading = false;
      state.gameStats.data = action.payload;
    }).addCase(fetchGameStats.rejected, state => {
      state.gameStats.loading = false;
    })

    //Game Events
    .addCase(fetchGameEvents.pending, state => {
      state.gameEvents.loading = true;
    }).addCase(fetchGameEvents.fulfilled, (state, action) => {
      state.gameEvents.loading = false;
      state.gameEvents.data = action.payload;
    }).addCase(fetchGameEvents.rejected, state => {
      state.gameEvents.loading = false;
    });
  }
});
export const {} = gameSlice.actions;
export default gameSlice.reducer;