import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiKey } from '../utils/data';

/* Inital State */

const initialState = {
  navbarSearchTerm: '',
  playerSearchTerm: '',
  searchTerm: '',
  loading: false,
  searchPlayers: []
};
export const fetchSearch = createAsyncThunk("fetchResults", async ({
  searchQuery
}) => {
  const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?p=${searchQuery}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const activePlayers = data.player.filter(item => item.strStatus === 'Active' && item.strSport === 'Soccer');
    const newActivePlayers = activePlayers.map(item => {
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
        number,
        name,
        position: strPosition,
        image,
        team
      };
    });
    return newActivePlayers;
  } catch (error) {
    console.error(error);
    return [];
  }
});

// Create the slice
const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    handleOnChangeSearchTerm: (state, action) => {
      const {
        type,
        value
      } = action.payload;
      if (type === 'navSearch') {
        state.navbarSearchTerm = value;
        state.playerSearchTerm = '';
      }
      if (type === 'playerSearch') {
        state.playerSearchTerm = value;
        state.navbarSearchTerm = '';
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchSearch.pending, state => {
      state.loading = true;
    }).addCase(fetchSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.searchPlayers = action.payload;
      state.navbarSearchTerm = '';
      state.playerSearchTerm = '';
    }).addCase(fetchSearch.rejected, state => {});
  }
});
export const {
  handleOnChangeSearchTerm
} = searchSlice.actions;
export default searchSlice.reducer;