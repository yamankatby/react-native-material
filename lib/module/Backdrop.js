import React, { useEffect, useRef, useState } from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';
import Surface from './Surface';
import { useStyles } from './hooks/use-styles';
const Backdrop = ({
  revealed = false,
  header,
  headerHeight,
  backLayer,
  backLayerHeight,
  subheader,
  subheaderHeight,
  style,
  headerContainerStyle,
  backLayerContainerStyle,
  frontLayerContainerStyle,
  subheaderContainerStyle,
  children
}) => {
  const [currentHeaderHeight, setCurrentHeaderHeight] = useState(headerHeight ?? 0);
  const [currentBackLayerHeight, setCurrentBackLayerHeight] = useState(backLayerHeight ?? 0);
  const [currentSubheaderHeight, setCurrentSubheaderHeight] = useState(subheaderHeight ?? 0);
  const styles = useStyles(({
    palette
  }) => ({
    container: {
      flex: 1,
      backgroundColor: palette.primary.main,
      overflow: 'hidden'
    },
    frontLayer: {
      position: 'absolute',
      start: 0,
      end: 0,
      bottom: 0,
      backgroundColor: palette.surface.main,
      borderTopStartRadius: 16,
      borderTopEndRadius: 16,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
      elevation: 1
    }
  }));
  const animated = useRef(new Animated.Value(revealed ? 1 : 0)).current;
  useEffect(() => {
    Animated.timing(animated, {
      toValue: revealed ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [revealed]);
  const dimensions = useWindowDimensions();
  const translateY = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dimensions.height < currentHeaderHeight + currentBackLayerHeight ? dimensions.height - currentHeaderHeight - currentSubheaderHeight : currentBackLayerHeight]
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [headerContainerStyle, {
      height: headerHeight
    }],
    onLayout: e => {
      if (!headerHeight) setCurrentHeaderHeight(e.nativeEvent.layout.height);
    }
  }, header), /*#__PURE__*/React.createElement(View, {
    style: [backLayerContainerStyle, {
      height: backLayerHeight
    }],
    onLayout: e => {
      if (!backLayerHeight) setCurrentBackLayerHeight(e.nativeEvent.layout.height);
    }
  }, backLayer), /*#__PURE__*/React.createElement(Surface, {
    style: [styles.frontLayer, {
      top: currentHeaderHeight,
      transform: [{
        translateY
      }]
    }, frontLayerContainerStyle]
  }, subheader && /*#__PURE__*/React.createElement(View, {
    style: [subheaderContainerStyle, {
      height: subheaderHeight
    }],
    onLayout: e => {
      if (!subheaderHeight) setCurrentSubheaderHeight(e.nativeEvent.layout.height);
    }
  }, subheader), children));
};
export default Backdrop;
//# sourceMappingURL=Backdrop.js.map