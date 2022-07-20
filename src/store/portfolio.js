import { createSlice } from '@reduxjs/toolkit';

const initialPortfolioState = { servicesActive: true, initiativesActive: false, responsabilitiesActive: false };

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: initialPortfolioState,
  reducers: {
    setServicesActive(state) {
        state.servicesActive = true;
        state.initiativesActive = false;
        state.responsabilitiesActive = false;
    },
    setInitiatiativesActive(state) {
        state.servicesActive = false;
        state.initiativesActive = true;
        state.responsabilitiesActive = false;
    },
    setResponsabilitiesActive(state) {
      state.servicesActive = false;
      state.initiativesActive = false;
      state.responsabilitiesActive = true;
  },
  },
});

export const portfolioActions = portfolioSlice.actions;

export default portfolioSlice.reducer;