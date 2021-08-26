import { configureStore, createReducer } from "@reduxjs/toolkit";
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
  theme: "owl",
};

const reducer = createReducer(initialState, (builder) => builder);

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
