function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Animated } from 'react-native';
import { useStyles } from './hooks/use-styles';
const Surface = ({
  category,
  elevation = 0,
  style,
  ...rest
}) => {
  const styles = useStyles(({
    elevations,
    shapes,
    surfaceColor
  }) => ({
    surface: {
      ...elevations[elevation],
      ...(category ? shapes[category] : {}),
      backgroundColor: surfaceColor(elevation).hex()
    }
  }), [category, elevation]);
  return /*#__PURE__*/React.createElement(Animated.View, _extends({
    style: [styles.surface, style]
  }, rest));
};
export default Surface;
//# sourceMappingURL=Surface.js.map