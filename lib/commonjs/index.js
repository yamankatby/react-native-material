"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  WindowSizeProvider: true,
  WindowSizeProviderProps: true,
  Breakpoint: true,
  WindowSize: true,
  ActiveBreakpointContext: true,
  useWindowSize: true,
  BreakpointsContext: true,
  useActiveBreakpoint: true,
  useBreakpoints: true,
  Breakpoints: true,
  ActivityIndicator: true,
  AppBar: true,
  Avatar: true,
  Backdrop: true,
  BackdropSubheader: true,
  Badge: true,
  Banner: true,
  Button: true,
  Chip: true,
  Dialog: true,
  DialogActions: true,
  DialogContent: true,
  DialogHeader: true,
  Divider: true,
  FAB: true,
  IconButton: true,
  ListItem: true,
  Pressable: true,
  Snackbar: true,
  Surface: true,
  Switch: true,
  Text: true,
  TextInput: true
};
Object.defineProperty(exports, "ActiveBreakpointContext", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.ActiveBreakpointContext;
  }
});
Object.defineProperty(exports, "ActivityIndicator", {
  enumerable: true,
  get: function () {
    return _ActivityIndicator.default;
  }
});
Object.defineProperty(exports, "AppBar", {
  enumerable: true,
  get: function () {
    return _AppBar.default;
  }
});
Object.defineProperty(exports, "Avatar", {
  enumerable: true,
  get: function () {
    return _Avatar.default;
  }
});
Object.defineProperty(exports, "Backdrop", {
  enumerable: true,
  get: function () {
    return _Backdrop.default;
  }
});
Object.defineProperty(exports, "BackdropSubheader", {
  enumerable: true,
  get: function () {
    return _BackdropSubheader.default;
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function () {
    return _Badge.default;
  }
});
Object.defineProperty(exports, "Banner", {
  enumerable: true,
  get: function () {
    return _Banner.default;
  }
});
Object.defineProperty(exports, "Breakpoint", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.Breakpoint;
  }
});
Object.defineProperty(exports, "Breakpoints", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.Breakpoints;
  }
});
Object.defineProperty(exports, "BreakpointsContext", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.BreakpointsContext;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Chip", {
  enumerable: true,
  get: function () {
    return _Chip.default;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function () {
    return _Dialog.default;
  }
});
Object.defineProperty(exports, "DialogActions", {
  enumerable: true,
  get: function () {
    return _DialogActions.default;
  }
});
Object.defineProperty(exports, "DialogContent", {
  enumerable: true,
  get: function () {
    return _DialogContent.default;
  }
});
Object.defineProperty(exports, "DialogHeader", {
  enumerable: true,
  get: function () {
    return _DialogHeader.default;
  }
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function () {
    return _Divider.default;
  }
});
Object.defineProperty(exports, "FAB", {
  enumerable: true,
  get: function () {
    return _FAB.default;
  }
});
Object.defineProperty(exports, "IconButton", {
  enumerable: true,
  get: function () {
    return _IconButton.default;
  }
});
Object.defineProperty(exports, "ListItem", {
  enumerable: true,
  get: function () {
    return _ListItem.default;
  }
});
Object.defineProperty(exports, "Pressable", {
  enumerable: true,
  get: function () {
    return _Pressable.default;
  }
});
Object.defineProperty(exports, "Snackbar", {
  enumerable: true,
  get: function () {
    return _Snackbar.default;
  }
});
Object.defineProperty(exports, "Surface", {
  enumerable: true,
  get: function () {
    return _Surface.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function () {
    return _Switch.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Text.default;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function () {
    return _TextInput.default;
  }
});
Object.defineProperty(exports, "WindowSize", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.WindowSize;
  }
});
Object.defineProperty(exports, "WindowSizeProvider", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.Provider;
  }
});
Object.defineProperty(exports, "WindowSizeProviderProps", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.ProviderProps;
  }
});
Object.defineProperty(exports, "useActiveBreakpoint", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.useActiveBreakpoint;
  }
});
Object.defineProperty(exports, "useBreakpoints", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.useBreakpoints;
  }
});
Object.defineProperty(exports, "useWindowSize", {
  enumerable: true,
  get: function () {
    return _reactNativeWindowSize.useWindowSize;
  }
});
var _reactNativeFlexLayout = require("react-native-flex-layout");
Object.keys(_reactNativeFlexLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactNativeFlexLayout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactNativeFlexLayout[key];
    }
  });
});
var _reactNativeWindowSize = require("react-native-window-size");
var _defaultTheme = require("./base/defaultTheme");
Object.keys(_defaultTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _defaultTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defaultTheme[key];
    }
  });
});
var _IconComponentContext = require("./base/IconComponentContext");
Object.keys(_IconComponentContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IconComponentContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IconComponentContext[key];
    }
  });
});
var _PortalContext = require("./base/PortalContext");
Object.keys(_PortalContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PortalContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PortalContext[key];
    }
  });
});
var _Provider = require("./base/Provider");
Object.keys(_Provider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Provider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Provider[key];
    }
  });
});
var _ThemeContext = require("./base/ThemeContext");
Object.keys(_ThemeContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ThemeContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThemeContext[key];
    }
  });
});
var _useAnimatedElevation = require("./hooks/use-animated-elevation");
Object.keys(_useAnimatedElevation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useAnimatedElevation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useAnimatedElevation[key];
    }
  });
});
var _useBoolean = require("./hooks/use-boolean");
Object.keys(_useBoolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useBoolean[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useBoolean[key];
    }
  });
});
var _usePalette = require("./hooks/use-palette");
Object.keys(_usePalette).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _usePalette[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _usePalette[key];
    }
  });
});
var _usePaletteColor = require("./hooks/use-palette-color");
Object.keys(_usePaletteColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _usePaletteColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _usePaletteColor[key];
    }
  });
});
var _useStyles = require("./hooks/use-styles");
Object.keys(_useStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useStyles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useStyles[key];
    }
  });
});
var _useSurfaceColor = require("./hooks/use-surface-color");
Object.keys(_useSurfaceColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSurfaceColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSurfaceColor[key];
    }
  });
});
var _useSurfaceScale = require("./hooks/use-surface-scale");
Object.keys(_useSurfaceScale).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSurfaceScale[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSurfaceScale[key];
    }
  });
});
var _ActivityIndicator = _interopRequireDefault(require("./ActivityIndicator"));
var _AppBar = _interopRequireDefault(require("./AppBar"));
var _Avatar = _interopRequireDefault(require("./Avatar"));
var _Backdrop = _interopRequireDefault(require("./Backdrop"));
var _BackdropSubheader = _interopRequireDefault(require("./BackdropSubheader"));
var _Badge = _interopRequireDefault(require("./Badge"));
var _Banner = _interopRequireDefault(require("./Banner"));
var _Button = _interopRequireDefault(require("./Button"));
var _Chip = _interopRequireDefault(require("./Chip"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _DialogActions = _interopRequireDefault(require("./DialogActions"));
var _DialogContent = _interopRequireDefault(require("./DialogContent"));
var _DialogHeader = _interopRequireDefault(require("./DialogHeader"));
var _Divider = _interopRequireDefault(require("./Divider"));
var _FAB = _interopRequireDefault(require("./FAB"));
var _IconButton = _interopRequireDefault(require("./IconButton"));
var _ListItem = _interopRequireDefault(require("./ListItem"));
var _Pressable = _interopRequireDefault(require("./Pressable"));
var _Snackbar = _interopRequireDefault(require("./Snackbar"));
var _Surface = _interopRequireDefault(require("./Surface"));
var _Switch = _interopRequireDefault(require("./Switch"));
var _Text = _interopRequireDefault(require("./Text"));
var _TextInput = _interopRequireDefault(require("./TextInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map