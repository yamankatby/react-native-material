import { createAction, createReducer } from "@reduxjs/toolkit";
import { requireNativeComponent } from "react-native";

export const setTheme = createAction<string>("SET_THEME");

interface InitialState {
  theme: string;
}

const initialState: InitialState = {
  theme: "default",
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(setTheme, (state, action) => {
    state.theme = action.payload;
  })
);

export default reducer;

// color Scheme
// elevation Scheme
// typography Scheme
// shape Scheme
// motion Scheme
