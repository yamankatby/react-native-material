export type ColorName =
  | "primary"
  | "primaryVariant"
  | "secondary"
  | "secondaryVariant"
  | "background"
  | "surface"
  | "error"
  | "onPrimary"
  | "onSecondary"
  | "onBackground"
  | "onSurface"
  | "onError";

export type ColorScheme = Record<ColorName, string>;
