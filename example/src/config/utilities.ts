import { State } from "./store";

export const select = <T = any>(
  theme: State["theme"],
  specifics: {
    basil?: Partial<T>;
    crane?: Partial<T>;
    fortnightly?: Partial<T>;
    owl?: Partial<T>;
    reply?: Partial<T>;
    shrine?: Partial<T>;
    default: Partial<T>;
  }
) => specifics[theme] ?? specifics.default;
