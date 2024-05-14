import React, { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import Text from './Text';
import { usePaletteColor } from './hooks/use-palette-color';
import { useStyles } from './hooks/use-styles';
const Badge = ({
  label,
  showZero = false,
  max = 99,
  visible = true,
  color = 'secondary',
  tintColor,
  style,
  labelStyle,
  children
}) => {
  const palette = usePaletteColor(color, tintColor);
  const styles = useStyles(() => ({
    container: {
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
      backgroundColor: palette.main,
      borderRadius: 10
    }
  }), [palette]);
  const isVisible = useMemo(() => label === 0 ? visible && showZero : visible, [label, showZero, visible]);
  const animated = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  useEffect(() => {
    Animated.timing(animated, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [isVisible]);
  const getLabel = () => {
    switch (typeof label) {
      case 'number':
      case 'string':
        return /*#__PURE__*/React.createElement(Text, {
          variant: "body2",
          style: [{
            color: palette.on
          }, labelStyle]
        }, typeof label === 'number' && label > max ? `${max}+` : label);
      case 'function':
        return label({
          color: palette.on
        });
      default:
        return label;
    }
  };
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.container, {
      transform: [{
        scale: animated
      }]
    }, style]
  }, getLabel(), children);
};
export default Badge;
//# sourceMappingURL=Badge.js.map