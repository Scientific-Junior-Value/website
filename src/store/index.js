import { configureStore } from '@reduxjs/toolkit';

import portfolioReducer from './portfolio';


const store = configureStore({
  reducer: { portfolio: portfolioReducer },
});

export default store;

