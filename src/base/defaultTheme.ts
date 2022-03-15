import { Platform } from 'react-native';
import type { Theme } from './ThemeContext';

export const defaultTheme: Theme = {
  colorScheme: 'light',
  elevations: {
    0: Platform.select({
      android: {
        elevation: 0,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      web: {
        boxShadow: 'none',
      },
    }),
    1: Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      },
      web: {
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      },
    }),
    2: Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
      web: {
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
      },
    }),
    3: Platform.select({
      android: {
        elevation: 3,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      web: {
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
      },
    }),
    4: Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      web: {
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      },
    }),
    5: Platform.select({
      android: {
        elevation: 5,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      web: {
        boxShadow:
          '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
      },
    }),
    6: Platform.select({
      android: {
        elevation: 6,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      web: {
        boxShadow:
          '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
      },
    }),
    7: Platform.select({
      android: {
        elevation: 7,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
      },
      web: {
        boxShadow:
          '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
      },
    }),
    8: Platform.select({
      android: {
        elevation: 8,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      web: {
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      },
    }),
    9: Platform.select({
      android: {
        elevation: 9,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
      },
      web: {
        boxShadow:
          '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
      },
    }),
    10: Platform.select({
      android: {
        elevation: 10,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      },
      web: {
        boxShadow:
          '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
      },
    }),
    11: Platform.select({
      android: {
        elevation: 11,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
      },
      web: {
        boxShadow:
          '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
      },
    }),
    12: Platform.select({
      android: {
        elevation: 12,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
      },
      web: {
        boxShadow:
          '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
      },
    }),
    13: Platform.select({
      android: {
        elevation: 13,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
      },
      web: {
        boxShadow:
          '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
      },
    }),
    14: Platform.select({
      android: {
        elevation: 14,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
      },
      web: {
        boxShadow:
          '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
      },
    }),
    15: Platform.select({
      android: {
        elevation: 15,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
      },
      web: {
        boxShadow:
          '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
      },
    }),
    16: Platform.select({
      android: {
        elevation: 16,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
      },
      web: {
        boxShadow:
          '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
      },
    }),
    17: Platform.select({
      android: {
        elevation: 17,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
      },
      web: {
        boxShadow:
          '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
      },
    }),
    18: Platform.select({
      android: {
        elevation: 18,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
      },
      web: {
        boxShadow:
          '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
      },
    }),
    19: Platform.select({
      android: {
        elevation: 19,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
      },
      web: {
        boxShadow:
          '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
      },
    }),
    20: Platform.select({
      android: {
        elevation: 20,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
      },
      web: {
        boxShadow:
          '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
      },
    }),
    21: Platform.select({
      android: {
        elevation: 21,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
      },
      web: {
        boxShadow:
          '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
      },
    }),
    22: Platform.select({
      android: {
        elevation: 22,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
      },
      web: {
        boxShadow:
          '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
      },
    }),
    23: Platform.select({
      android: {
        elevation: 23,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
      },
      web: {
        boxShadow:
          '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
      },
    }),
    24: Platform.select({
      android: {
        elevation: 24,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
      },
      web: {
        boxShadow:
          '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
      },
    }),
  },
  palette: {
    primary: { main: '#6200EE', on: '#FFFFFF' },
    secondary: { main: '#03DAC6', on: '#000000' },
    background: { main: '#FFFFFF', on: '#000000' },
    surface: { main: '#FFFFFF', on: '#000000' },
    error: { main: '#B00020', on: '#FFFFFF' },
  },
  shapes: {
    small: {
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
      borderBottomStartRadius: 4,
      borderBottomEndRadius: 4,
    },
    medium: {
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
      borderBottomStartRadius: 4,
      borderBottomEndRadius: 4,
    },
    large: {
      borderTopStartRadius: 0,
      borderTopEndRadius: 0,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
    },
  },
  typography: {
    h1: {
      fontWeight: '300',
      fontSize: 96,
      letterSpacing: -1.5,
    },
    h2: {
      fontWeight: '300',
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontWeight: '500',
      fontSize: 20,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 16,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 14,
      letterSpacing: 0.25,
    },
    button: {
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 1.25,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 12,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colorScheme: 'dark',
  palette: {
    primary: { main: '#BB86FC', on: '#000000' },
    secondary: { main: '#03DAC6', on: '#000000' },
    background: { main: '#121212', on: '#FFFFFF' },
    surface: { main: '#121212', on: '#FFFFFF' },
    error: { main: '#CF6679', on: '#000000' },
  },
};
