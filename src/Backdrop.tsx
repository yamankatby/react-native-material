import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleProp, useWindowDimensions, View, ViewProps, ViewStyle } from 'react-native';
import Surface from './Surface';
import { useStyles } from './hooks/use-styles';

export interface BackdropProps {
  revealed?: boolean;

  header?: React.ReactElement | null;

  headerHeight?: number;

  backLayer?: React.ReactElement | null;

  backLayerHeight?: number;

  subheader?: React.ReactElement | null;

  subheaderHeight?: number;

  style?: StyleProp<ViewStyle>;

  headerContainerStyle?: StyleProp<ViewStyle>;

  backLayerContainerStyle?: StyleProp<ViewStyle>;

  frontLayerContainerStyle?: Animated.AnimatedProps<ViewProps>['style'];

  subheaderContainerStyle?: StyleProp<ViewStyle>;
}

const Backdrop: React.FC<BackdropProps> = ({
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
  children,
}) => {
  const [currentHeaderHeight, setCurrentHeaderHeight] = useState(headerHeight ?? 0);
  const [currentBackLayerHeight, setCurrentBackLayerHeight] = useState(backLayerHeight ?? 0);
  const [currentSubheaderHeight, setCurrentSubheaderHeight] = useState(subheaderHeight ?? 0);

  const styles = useStyles(({ palette }) => ({
    container: {
      flex: 1,
      backgroundColor: palette.primary.main,
      overflow: 'hidden',
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
      elevation: 1,
    },
  }));

  const animated = useRef(new Animated.Value(revealed ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: revealed ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [revealed]);

  const dimensions = useWindowDimensions();

  const translateY = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [
      0,
      dimensions.height < currentHeaderHeight + currentBackLayerHeight
        ? dimensions.height - currentHeaderHeight - currentSubheaderHeight
        : currentBackLayerHeight,
    ],
  });

  return (
    <View style={[styles.container, style]}>
      <View
        style={[headerContainerStyle, { height: headerHeight }]}
        onLayout={(e) => {
          if (!headerHeight) setCurrentHeaderHeight(e.nativeEvent.layout.height);
        }}
      >
        {header}
      </View>

      <View
        style={[backLayerContainerStyle, { height: backLayerHeight }]}
        onLayout={(e) => {
          if (!backLayerHeight) setCurrentBackLayerHeight(e.nativeEvent.layout.height);
        }}
      >
        {backLayer}
      </View>

      <Surface
        style={[styles.frontLayer, { top: currentHeaderHeight, transform: [{ translateY }] }, frontLayerContainerStyle]}
      >
        {subheader && (
          <View
            style={[subheaderContainerStyle, { height: subheaderHeight }]}
            onLayout={(e) => {
              if (!subheaderHeight) setCurrentSubheaderHeight(e.nativeEvent.layout.height);
            }}
          >
            {subheader}
          </View>
        )}

        {children}
      </Surface>
    </View>
  );
};

export default Backdrop;
