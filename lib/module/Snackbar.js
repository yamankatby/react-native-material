function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Surface from './Surface';
import Text from './Text';
import { View } from 'react-native';
import { useTheme } from './base/ThemeContext';
import { useSurfaceScale } from './hooks/use-surface-scale';
const Snackbar = ({
  message,
  action,
  style,
  ...rest
}) => {
  const {
    palette
  } = useTheme();
  const surfaceScale = useSurfaceScale();
  return /*#__PURE__*/React.createElement(Surface, _extends({
    elevation: 6,
    category: "medium",
    style: [{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: surfaceScale(0.87).hex()
    }, style]
  }, rest), /*#__PURE__*/React.createElement(Text, {
    variant: "body2",
    style: {
      marginVertical: 8,
      color: palette.surface.main
    }
  }, message), /*#__PURE__*/React.createElement(View, {
    style: {
      marginStart: 'auto',
      marginEnd: -8
    }
  }, action));
};
export default Snackbar;
//# sourceMappingURL=Snackbar.js.map