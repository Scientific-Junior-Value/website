import { createSlice } from '@reduxjs/toolkit';

const initialTeamState = { 
    directionActive: true, 
    magActive: false,
    cfActive: false,
    ciActive: false, 
    rcActive: false, 
    reActive: false, 
    rhActive: false, 
    alumniActive: false, 
};

const teamSlice = createSlice({
  name: 'team',
  initialState: initialTeamState,
  reducers: {
    setDirectionActive(state) {
        state.directionActive = true;
        state.magActive = false;
        state.cfActive = false;
        state.ciActive = false;
        state.rcActive = false;
        state.reActive = false;
        state.rhActive = false;
        state.alumniActive = false;
    }, 
    setMagActive(state) {
        state.directionActive = false;
        state.magActive = true;
        state.cfActive = false;
        state.ciActive = false;
        state.rcActive = false;
        state.reActive = false;
        state.rhActive = false;
        state.alumniActive = false;
    },
    setCFActive(state) {
        state.directionActive = false;
        state.magActive = false;
        state.cfActive = true;
        state.ciActive = false;
        state.rcActive = false;
        state.reActive = false;
        state.rhActive = false;
        state.alumniActive = false;
    },
    setCIActive(state) {
        state.directionActive = false;
        state.magActive = false;
        state.cfActive = false;
        state.ciActive = true;
        state.rcActive = false;
        state.reActive = false;
        state.rhActive = false;
        state.alumniActive = false;
    },
    setRCActive(state) {
        state.directionActive = false;
        state.magActive = false;
        state.cfActive = false;
        state.ciActive = false;
        state.rcActive = true;
        state.reActive = false;
        state.rhActive = false;
        state.alumniActive = false;
    },
    setREActive(state) {
        state.directionActive = false;
        state.magActive = false;
        state.cfActive = false;
        state.ciActive = false;
        state.rcActive = false;
        state.reActive = true;
        state.rhActive = false;
        state.alumniActive = false;
    },
    setRHActive(state) {
        state.directionActive = false;
        state.magActive = false;
        state.cfActive = false;
        state.ciActive = false;
        state.rcActive = false;
        state.reActive = false;
        state.rhActive = true;
        state.alumniActive = false;
    },
    setAlumniActive(state) {
        state.directionActive = false;
        state.magActive = false;
        state.cfActive = false;
        state.ciActive = false;
        state.rcActive = false;
        state.reActive = false;
        state.rhActive = false;
        state.alumniActive = true;
    },
  },
});

export const teamActions = teamSlice.actions;

export default teamSlice.reducer;