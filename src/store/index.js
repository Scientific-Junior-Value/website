import { configureStore } from '@reduxjs/toolkit';

import portfolioReducer from './portfolio';
import recruitmentReducer from './recrutamento';


const store = configureStore({
  reducer: { portfolio: portfolioReducer, recruitment: recruitmentReducer },
});

export default store;

