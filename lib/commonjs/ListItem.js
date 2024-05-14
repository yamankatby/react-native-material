"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Divider = _interopRequireDefault(require("./Divider"));
var _Text = _interopRequireDefault(require("./Text"));
var _Pressable = _interopRequireDefault(require("./Pressable"));
var _useSurfaceScale = require("./hooks/use-surface-scale");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ListItem = ({
  title,
  secondaryText,
  overline,
  meta,
  leadingMode = 'icon',
  leading,
  trailing,
  divider,
  pressEffect,
  pressEffectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed
}) => {
  const scale = (0, _useSurfaceScale.useSurfaceScale)();
  return /*#__PURE__*/_react.default.createElement(_Pressable.default, {
    style: {
      backgroundColor: scale(0).hex()
    },
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor,
    onPress: onPress,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    onLongPress: onLongPress,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    delayLongPress: delayLongPress,
    disabled: disabled,
    hitSlop: hitSlop,
    pressRetentionOffset: pressRetentionOffset,
    android_disableSound: android_disableSound,
    android_ripple: android_ripple,
    testOnly_pressed: testOnly_pressed
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 12
    }
  }, leading && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 100,
      height: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginStart: leadingMode === 'image' ? 0 : 16
    }
  }, leading), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      marginHorizontal: 16
    }
  }, overline && /*#__PURE__*/_react.default.createElement(_Text.default, {
    selectable: false,
    variant: "overline",
    style: {
      marginBottom: 2,
      color: scale(0.6).hex()
    }
  }, overline), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, title && /*#__PURE__*/_react.default.createElement(_Text.default, {
    selectable: false,
    variant: "subtitle1",
    style: {
      color: scale(0.87).hex()
    }
  }, title), meta && /*#__PURE__*/_react.default.createElement(_Text.default, {
    selectable: false,
    variant: "caption",
    style: {
      color: scale(0.87).hex()
    }
  }, meta)), secondaryText && /*#__PURE__*/_react.default.createElement(_Text.default, {
    selectable: false,
    variant: "body2",
    style: {
      marginTop: 4,
      color: scale(0.6).hex()
    }
  }, secondaryText)), trailing && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: 24,
      height: 24,
      marginEnd: 16,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, typeof trailing === 'function' ? trailing({
    color: scale(0.87).hex(),
    size: 24
  }) : trailing)), divider && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    leadingInset: leading ? leadingMode === 'icon' ? 56 : leadingMode === 'avatar' ? 88 : 116 : 16
  }));
};
var _default = exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map