import { Platform } from "react-native";
import { Palette } from "../palette";
import { Elevations } from "./elevations";

export type ElevationsOptions = Partial<Elevations>;

export const createElevations = (
  palette: Palette,
  options?: ElevationsOptions | undefined
): Elevations => {
  return {
    "0": {
      backgroundColor: palette.elevationColors["0"],
    },
    "1": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
        },
        android: {
          elevation: 1,
        },
      }),
      backgroundColor: palette.elevationColors["1"],
    },
    "2": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
        },
        android: {
          elevation: 2,
        },
      }),
      backgroundColor: palette.elevationColors["2"],
    },
    "3": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
        },
        android: {
          elevation: 3,
        },
      }),
      backgroundColor: palette.elevationColors["3"],
    },
    "4": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        },
        android: {
          elevation: 4,
        },
      }),
      backgroundColor: palette.elevationColors["4"],
    },
    "6": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
        },
        android: {
          elevation: 6,
        },
      }),
      backgroundColor: palette.elevationColors["6"],
    },
    "8": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
        },
        android: {
          elevation: 8,
        },
      }),
      backgroundColor: palette.elevationColors["8"],
    },
    "12": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
        },
        android: {
          elevation: 12,
        },
      }),
      backgroundColor: palette.elevationColors["12"],
    },
    "16": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
        },
        android: {
          elevation: 16,
        },
      }),
      backgroundColor: palette.elevationColors["16"],
    },
    "24": {
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
        },
        android: {
          elevation: 24,
        },
      }),
      backgroundColor: palette.elevationColors["24"],
    },
    ...options,
  };
};
