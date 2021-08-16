import { ImageStyle, Platform, TextStyle, ViewStyle } from "react-native";

type Style = ViewStyle | TextStyle | ImageStyle;

export interface Elevation {
  "0": Style;
  "1": Style;
  "2": Style;
  "3": Style;
  "4": Style;
  "6": Style;
  "8": Style;
  "12": Style;
  "16": Style;
  "24": Style;
}

export const elevation: Elevation = {
  "0": {},
  "1": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00
      },
      android: {
        elevation: 1
      }
    })
  },
  "2": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41
      },
      android: {
        elevation: 2
      }
    })
  },
  "3": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
      },
      android: {
        elevation: 3
      }
    })
  },
  "4": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
      },
      android: {
        elevation: 4
      }
    })
  },
  "6": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65
      },
      android: {
        elevation: 6
      }
    })
  },
  "8": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65
      },
      android: {
        elevation: 8
      }
    })
  },
  "12": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49
      },
      android: {
        elevation: 12
      }
    })
  },
  "16": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32
      },
      android: {
        elevation: 16
      }
    })
  },
  "24": {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00
      },
      android: {
        elevation: 24
      }
    })
  }
};
