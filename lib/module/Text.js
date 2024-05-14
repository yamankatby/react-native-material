function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from './base/ThemeContext';
import { usePaletteColor } from './hooks/use-palette-color';
const Text = ({
  variant = 'body1',
  color = 'on-background',
  style,
  ...rest
}) => {
  const {
    typography
  } = useTheme();
  const palette = usePaletteColor(color);
  return /*#__PURE__*/React.createElement(RNText, _extends({}, rest, {
    style: [typography[variant], {
      color: palette.main
    }, style]
  }));
};
export default Text;
//# sourceMappingURL=Text.js.map