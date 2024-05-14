function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { usePaletteColor } from './hooks/use-palette-color';
const ActivityIndicator = ({
  color = 'primary',
  ...rest
}) => {
  const {
    main
  } = usePaletteColor(color);
  return /*#__PURE__*/React.createElement(RNActivityIndicator, _extends({}, rest, {
    color: main
  }));
};
export default ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.js.map