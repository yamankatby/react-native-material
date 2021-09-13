import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface State {
  theme:
    | "basil"
    | "crane"
    | "fortnightly"
    | "owl"
    | "reply"
    | "shrine"
    | "default";
}

const initialState: State = {
  theme: "basil"
};

export const changeTheme = createAction<State["theme"]>("changeTheme");

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(changeTheme, (state, action) => {
    state.theme = action.payload;
  })
);

export const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
