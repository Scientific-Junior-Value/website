import { configureStore } from "@reduxjs/toolkit";

import portfolioReducer from "./portfolio";
import recruitmentReducer from "./recrutamento";
import teamReducer from "./team";

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    recruitment: recruitmentReducer,
    team: teamReducer,
  },
});

export default store;
