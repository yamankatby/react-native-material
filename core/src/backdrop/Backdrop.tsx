import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleProp, View, ViewStyle } from "react-native";
import { Surface } from "../surface";
import { useBackdropStyles } from "./styles";

export interface BackdropProps {
  header?: React.ReactElement | undefined;
  headerHeight?: number | undefined;
  backLayer?: React.ReactElement | undefined;
  backLayerHeight?: number | undefined;
  subheader?: React.ReactElement | undefined;
  expanded?: boolean | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  backLayerContainerStyle?: StyleProp<ViewStyle> | undefined;
  headerStyle?: StyleProp<ViewStyle> | undefined;
  backLayerStyle?: StyleProp<ViewStyle> | undefined;
  frontLayerStyle?: StyleProp<ViewStyle> | undefined;
  subheaderStyle?: StyleProp<ViewStyle> | undefined;
}

const Backdrop: React.FC<BackdropProps> = ({
  header,
  backLayer,
  backLayerHeight,
  subheader,
  headerHeight,
  expanded,
  style,
  backLayerContainerStyle,
  headerStyle,
  backLayerStyle,
  frontLayerStyle,
  subheaderStyle,
  children
}) => {
  const styles = useBackdropStyles()

  const [frontLayerTop, setFrontLayerTop] = useState<number | undefined>(headerHeight)
  const [frontLayerTranslateY, setFrontLayerTranslateY] = useState<number | undefined>(backLayerHeight)

  const animatedValue = useRef(new Animated.Value(expanded! ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: expanded ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [expanded])

  const frontLayerTranslateYAnimated = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, frontLayerTranslateY ?? 0]
  })

  return (
    <View style={[styles.container, style]}>
      <View style={backLayerContainerStyle}>
        <View
          style={headerStyle}
          onLayout={e => {
            if (frontLayerTop === undefined) {
              setFrontLayerTop(e.nativeEvent.layout.height)
            }
          }}
        >
          {header}
        </View>
        <View
          style={backLayerStyle}
          onLayout={e => {
            if (frontLayerTranslateY === undefined) {
              setFrontLayerTranslateY(e.nativeEvent.layout.height)
            }
          }}
        >
          {backLayer}
        </View>
      </View>
      <Surface
        category="large"
        style={[styles.frontLayer, {
          top: frontLayerTop,
          transform: [{ translateY: frontLayerTranslateYAnimated as any }]
        }, frontLayerStyle]}
      >
        <View style={subheaderStyle}>
          {subheader}
        </View>
        {children}
      </Surface>
    </View>
  )
}

Backdrop.defaultProps = {
  expanded: false
}

export default Backdrop