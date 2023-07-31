import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "../Context/portfolioSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
});

export default store;
