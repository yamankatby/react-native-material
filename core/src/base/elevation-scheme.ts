import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type Elevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;

export type ElevationStyle = ViewStyle | TextStyle | ImageStyle;

export type ElevationScheme = Record<Elevation, ElevationStyle>;