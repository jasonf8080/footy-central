// src/slices/newSlice.ts
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  showMobileMenu: false
};
const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    setShowMobileMenu: state => {
      state.showMobileMenu = !state.showMobileMenu;
    }
  }
});

////// EXPORTS //////
export const {
  setShowMobileMenu
} = menuSlice.actions;
export default menuSlice.reducer;