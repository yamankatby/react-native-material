import React from 'react';
import { View } from 'react-native';
import Divider from './Divider';
import Text from './Text';
import Pressable from './Pressable';
import { useSurfaceScale } from './hooks/use-surface-scale';
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
  const scale = useSurfaceScale();
  return /*#__PURE__*/React.createElement(Pressable, {
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
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 12
    }
  }, leading && /*#__PURE__*/React.createElement(View, {
    style: {
      width: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 100,
      height: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginStart: leadingMode === 'image' ? 0 : 16
    }
  }, leading), /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      marginHorizontal: 16
    }
  }, overline && /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    variant: "overline",
    style: {
      marginBottom: 2,
      color: scale(0.6).hex()
    }
  }, overline), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, title && /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    variant: "subtitle1",
    style: {
      color: scale(0.87).hex()
    }
  }, title), meta && /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    variant: "caption",
    style: {
      color: scale(0.87).hex()
    }
  }, meta)), secondaryText && /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    variant: "body2",
    style: {
      marginTop: 4,
      color: scale(0.6).hex()
    }
  }, secondaryText)), trailing && /*#__PURE__*/React.createElement(View, {
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
  }) : trailing)), divider && /*#__PURE__*/React.createElement(Divider, {
    leadingInset: leading ? leadingMode === 'icon' ? 56 : leadingMode === 'avatar' ? 88 : 116 : 16
  }));
};
export default ListItem;
//# sourceMappingURL=ListItem.js.map