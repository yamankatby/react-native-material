import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTheme = createAction<string>("SET_THEME");

interface InitialState {
  theme: string;
}

const initialState: InitialState = {
  theme: "basil",
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(setTheme, (state, action) => {
    state.theme = action.payload;
  })
);

export default reducer;
