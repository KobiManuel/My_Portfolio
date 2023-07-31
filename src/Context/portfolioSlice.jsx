import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroCard: true,
  firstCard: false,
  secondCard: false,
  thirdCard: false,
  fourthCard: false,
  fifthCard: false,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setHeroCard: (state, action) => {
      state.heroCard = action.payload;
    },
    setFirstCard: (state, action) => {
      state.firstCard = action.payload;
    },
    setSecondCard: (state, action) => {
      state.secondCard = action.payload;
    },
    setThirdCard: (state, action) => {
      state.thirdCard = action.payload;
    },
    setFourthCard: (state, action) => {
      state.fourthCard = action.payload;
    },
    setFifthCard: (state, action) => {
      state.fifthCard = action.payload;
    },
  },
});

export const {
  setHeroCard,
  setFirstCard,
  setSecondCard,
  setThirdCard,
  setFourthCard,
  setFifthCard,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;

// import React, { createContext, useState } from "react";

// export const PortfolioContext = createContext();

// export const PortfolioContextProvider = ({ children }) => {
//   const [heroCard, setHeroCard] = useState(true);
//   const [firstCard, setFirstCard] = useState(false);
//   const [secondCard, setSecondCard] = useState(false);
//   const [thirdCard, setThirdCard] = useState(false);
//   const [fourthCard, setFourthCard] = useState(false);
//   const [fifthCard, setFifthCard] = useState(false);
//   return (
//     <PortfolioContext.Provider
//       value={{
//         heroCard,
//         setHeroCard,
//         firstCard,
//         setFirstCard,
//         secondCard,
//         setSecondCard,
//         thirdCard,
//         setThirdCard,
//         fourthCard,
//         setFourthCard,
//         fifthCard,
//         setFifthCard,
//       }}
//     >
//       {children}
//     </PortfolioContext.Provider>
//   );
// };
