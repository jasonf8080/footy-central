import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menu';
import clubsReducer from './features/clubs';
import teamReducer from './features/team';
import playerReducer from './features/player';
import gameReducer from './features/game';
import searchReducer from './features/search';

// Create and export the store
const store = configureStore({
  reducer: {
    menu: menuReducer,
    // Attach the reducer from your slice
    clubs: clubsReducer,
    // Attach the reducer from your slice
    team: teamReducer,
    // Attach the reducer from your slice
    player: playerReducer,
    // Attach the reducer from your slice
    game: gameReducer,
    // Attach the reducer from your slice
    playerSearch: searchReducer // Attach the reducer from your slice
  }
});
export default store;