import { createSlice } from '@reduxjs/toolkit';

const initialRecruitmentState = { 
    ciActive: true, 
    reActive: false,
    rhActive: false,
    rcActive: false, 
};

const recruitmentSlice = createSlice({
  name: 'recruitment',
  initialState: initialRecruitmentState,
  reducers: {
    setCIActive(state) {
        state.ciActive = true;
        state.reActive = false;
        state.rhActive = false;
        state.rcActive = false;
    },
    setREActive(state) {
        state.ciActive = false;
        state.reActive = true;
        state.rhActive = false;
        state.rcActive = false;
    },
    setRHActive(state) {
        state.ciActive = false;
        state.reActive = false;
        state.rhActive = true;
        state.rcActive = false;
    },
    setRCActive(state) {
        state.ciActive = false;
        state.reActive = false;
        state.rhActive = false;
        state.rcActive = true;
    },
  },
});

export const portfolioActions = recruitmentSlice.actions;

export default recruitmentSlice.reducer;