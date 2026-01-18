// src/slices/userProfileSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { reduceHonours } from '../utils/helpers';

/* Inital State */

const initialState = {
  playerInfo: {
    loading: false,
    data: {
      image: '',
      name: '',
      number: '',
      team: '',
      nation: '',
      position: '',
      height: '',
      birthday: '',
      foot: '',
      instagram: '',
      facebook: '',
      description: ''
    },
    error: ''
  },
  playerCareer: {
    loading: false,
    data: [],
    error: ''
  },
  playerHonours: {
    loading: false,
    data: [],
    error: ''
  }
};
export const fetchPlayerInfo = createAsyncThunk('fetchPlayerInfo', async ({
  playerID
}) => {
  try {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerID}`);
    const data = await response.json();
    const player = data.players[0]; // Get the first player object from the array
    console.log(player);
    const newData = {
      image: player.strCutout,
      name: player.strPlayer,
      position: player.strPosition,
      team: player.strTeam,
      nation: player.strNationality,
      number: player.strNumber,
      height: player.strHeight,
      birthday: player.dateBorn,
      foot: player.strSide,
      instagram: player.strInstagram,
      facebook: player.strFacebook,
      description: player.strDescriptionEN
    };
    return newData;
  } catch {
    return {
      image: '',
      name: '',
      position: '',
      team: '',
      nation: '',
      number: '',
      height: '',
      birthday: '',
      foot: '',
      instagram: '',
      facebook: '',
      description: ''
    };
  }
});
export const fetchPlayerCareer = createAsyncThunk('fetchPlayerCareer', async ({
  playerID
}) => {
  try {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupformerteams.php?id=${playerID}`);
    const data = await response.json();
    let newData = data.formerteams.map(item => {
      const {
        strJoined: joined,
        strDeparted: departed,
        strFormerTeam: team,
        strBadge: teamLogo,
        idFormerTeam: idTeam,
        strMoveType: moveType
      } = item;
      return {
        joined,
        departed,
        team,
        idTeam,
        teamLogo,
        moveType
      };
    });

    //Filter out international teams
    newData = newData.filter(item => item.moveType !== 'International');

    //Sort teams by date
    if (newData.length > 0) {
      newData = newData.sort((a, b) => Number(a.joined) - Number(b.joined));
    }
    return newData;
  } catch (error) {
    return [];
  }
});
export const fetchPlayerHonours = createAsyncThunk('fetchPlayerHonours', async ({
  playerID
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookuphonours.php?id=${playerID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.honours.map(item => {
      const {
        id,
        strHonour: competition
      } = item;
      return {
        id,
        competition,
        amount: 1
      };
    });

    //Find duplicates and edit amount for each honour
    const reducedData = reduceHonours(newData);
    return reducedData;
  } catch (error) {
    return [];
  }
});
const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    //PlayerInfo
    .addCase(fetchPlayerInfo.pending, state => {
      state.playerInfo.loading = true;
    }).addCase(fetchPlayerInfo.fulfilled, (state, action) => {
      state.playerInfo.loading = false;
      state.playerInfo.data = action.payload;
    }).addCase(fetchPlayerInfo.rejected, state => {
      state.playerInfo.loading = false;
    })

    //Player Career
    .addCase(fetchPlayerCareer.pending, state => {
      state.playerCareer.loading = true;
    }).addCase(fetchPlayerCareer.fulfilled, (state, action) => {
      state.playerCareer.loading = false;
      state.playerCareer.data = action.payload;
    }).addCase(fetchPlayerCareer.rejected, state => {
      state.playerCareer.loading = false;
    })

    //Player Honours
    .addCase(fetchPlayerHonours.pending, state => {
      state.playerHonours.loading = true;
    }).addCase(fetchPlayerHonours.fulfilled, (state, action) => {
      state.playerHonours.loading = false;
      state.playerHonours.data = action.payload;
    }).addCase(fetchPlayerHonours.rejected, state => {
      state.playerHonours.loading = false;
    });
  }
});
export const {} = playerSlice.actions;
export default playerSlice.reducer;