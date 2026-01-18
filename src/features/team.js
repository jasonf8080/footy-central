// src/slices/userProfileSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findPosition } from '../utils/helpers';
import { apiKey } from '../utils/data';

/* Inital State */

const initialState = {
  teamInfo: {
    loading: false,
    data: {
      idTeam: "",
      name: "",
      logo: "",
      country: "",
      stadium: "",
      formed: "",
      color: "",
      website: "",
      socials: {
        facebook: "",
        instagram: "",
        twitter: ""
      },
      description: ""
    },
    error: ''
  },
  teamResults: {
    loading: false,
    data: [],
    error: ''
  },
  teamFixtures: {
    loading: false,
    data: [],
    error: ''
  },
  teamRoster: {
    loading: false,
    data: [],
    error: ''
  }
};
export const fetchTeam = createAsyncThunk('fetchTeam', async ({
  teamID
}) => {
  try {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupteam.php?id=${teamID}`);
    const data = await response.json();
    const {
      idTeam,
      strTeam: name,
      strCountry: country,
      strStadium: stadium,
      strBadge: logo,
      strColour1: color,
      intFormedYear: formed,
      strDescriptionEN: description,
      strWebsite: website,
      strFacebook: facebook,
      strInstagram: instagram,
      strTwitter: twitter
    } = data.teams[0];
    const newTeam = {
      idTeam,
      name,
      logo,
      country,
      stadium,
      formed,
      color,
      website,
      socials: {
        facebook,
        instagram,
        twitter
      },
      description
    };
    localStorage.setItem('team', JSON.stringify({
      teamName: newTeam.name,
      teamBadge: newTeam.logo,
      teamColor: newTeam.color
    }));
    return newTeam;
  } catch (error) {
    return {
      idTeam: "",
      name: "",
      logo: "",
      country: "",
      stadium: "",
      formed: "",
      color: "",
      website: "",
      socials: {
        facebook: "",
        instagram: "",
        twitter: ""
      },
      description: ""
    };
  }
});
export const fetchTeamResults = createAsyncThunk('fetchTeamResults', async ({
  teamID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.results.map(item => {
      const {
        idEvent: id,
        strLeague: league,
        dateEvent: date,
        strHomeTeam: homeTeamName,
        strHomeTeamBadge: homeTeamLogo,
        intHomeScore: homeScore,
        strAwayTeam: awayTeamName,
        strAwayTeamBadge: awayTeamLogo,
        intAwayScore: awayScore
      } = item;
      return {
        id,
        league,
        date,
        homeTeam: {
          name: homeTeamName,
          logo: homeTeamLogo,
          score: homeScore
        },
        awayTeam: {
          name: awayTeamName,
          logo: awayTeamLogo,
          score: awayScore
        },
        winner: homeScore > awayScore ? 'home' : awayScore > homeScore ? 'away' : null
      };
    });
    return newData.reverse();
  } catch (error) {
    return [];
  }
});
export const fetchTeamFixtures = createAsyncThunk('fetchTeamFixtures', async ({
  teamID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsnext.php?id=${teamID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.events.map(item => {
      const {
        idEvent: id,
        strLeague: league,
        dateEvent: date,
        strHomeTeam: homeTeamName,
        strHomeTeamBadge: homeTeamLogo,
        strAwayTeam: awayTeamName,
        strAwayTeamBadge: awayTeamLogo
      } = item;
      return {
        id,
        league,
        date,
        homeTeam: {
          name: homeTeamName,
          logo: homeTeamLogo
        },
        awayTeam: {
          name: awayTeamName,
          logo: awayTeamLogo
        }
      };
    });
    return newData;
  } catch {
    return [];
  }
});
export const fetchTeamRoster = createAsyncThunk('fetchTeamRoster', async ({
  teamID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookup_all_players.php?id=${teamID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const newData = data.player.map(item => {
      const {
        idPlayer: id,
        strNumber: number,
        strPlayer: name,
        strPosition,
        strCutout: image,
        strTeam: team
      } = item;
      return {
        id,
        name,
        number,
        position: findPosition(strPosition),
        image,
        team
      };
    });
    return newData;
  } catch {
    return [];
  }
});
const teamSlice = createSlice({
  name: 'teamSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    //TeamInfo
    .addCase(fetchTeam.pending, state => {
      state.teamInfo.loading = true;
    }).addCase(fetchTeam.fulfilled, (state, action) => {
      state.teamInfo.loading = false;
      state.teamInfo.data = action.payload;
    }).addCase(fetchTeam.rejected, state => {
      state.teamInfo.loading = false;
    })

    //TeamResults
    .addCase(fetchTeamResults.pending, state => {
      state.teamResults.loading = true;
    }).addCase(fetchTeamResults.fulfilled, (state, action) => {
      state.teamResults.loading = false;
      state.teamResults.data = action.payload;
    }).addCase(fetchTeamResults.rejected, state => {
      state.teamResults.loading = false;
    })

    //TeamFixtures
    .addCase(fetchTeamFixtures.pending, state => {
      state.teamFixtures.loading = true;
    }).addCase(fetchTeamFixtures.fulfilled, (state, action) => {
      state.teamFixtures.loading = false;
      state.teamFixtures.data = action.payload;
    }).addCase(fetchTeamFixtures.rejected, state => {
      state.teamFixtures.loading = false;
    })

    //TeamRoster
    .addCase(fetchTeamRoster.pending, state => {
      state.teamRoster.loading = true;
    }).addCase(fetchTeamRoster.fulfilled, (state, action) => {
      state.teamRoster.loading = false;
      state.teamRoster.data = action.payload;
    }).addCase(fetchTeamRoster.rejected, state => {
      state.teamRoster.loading = false;
    });
  }
});
export const {} = teamSlice.actions;
export default teamSlice.reducer;