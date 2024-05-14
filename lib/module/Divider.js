import React from 'react';
import { View } from 'react-native';
import chroma from 'chroma-js';
import { useTheme } from './base/ThemeContext';
const Divider = ({
  color,
  inset,
  leadingInset,
  trailingInset,
  style
}) => {
  const {
    palette
  } = useTheme();
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      height: 1,
      backgroundColor: color ?? chroma(palette.surface.on).alpha(0.08).hex(),
      marginStart: inset ?? leadingInset,
      marginEnd: inset ?? trailingInset
    }, style]
  });
};
export default Divider;
//# sourceMappingURL=Divider.js.map