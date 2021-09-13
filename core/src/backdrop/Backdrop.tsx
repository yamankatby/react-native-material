import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleProp, View, ViewStyle } from "react-native";
import { Surface } from "../surface";
import Subheader, { SubheaderProps } from "./Subheader";
import { Divider } from "../divider";
import { useBackdropStyles } from "./styles";

export interface BackdropProps {
  header?: React.ReactElement | undefined;

  headerHeight?: number | undefined;

  backLayer?: React.ReactElement | undefined;

  backLayerHeight?: number | undefined;

  subheader?: string | React.ReactElement | undefined;

  subheaderDivider?: boolean | React.ReactElement | undefined;

  revealed?: boolean | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  backLayerContainerStyle?: StyleProp<ViewStyle> | undefined;

  headerStyle?: StyleProp<ViewStyle> | undefined;

  backLayerStyle?: StyleProp<ViewStyle> | undefined;

  frontLayerStyle?: StyleProp<ViewStyle> | undefined;
}

const Backdrop: React.FC<BackdropProps> & { Subheader: React.FC<SubheaderProps> } = ({
  header,
  backLayer,
  backLayerHeight,
  subheader,
  subheaderDivider,
  headerHeight,
  revealed,
  style,
  backLayerContainerStyle,
  headerStyle,
  backLayerStyle,
  frontLayerStyle,
  children
}) => {
  const styles = useBackdropStyles()

  const [frontLayerTop, setFrontLayerTop] = useState<number | undefined>(headerHeight)
  const [frontLayerTranslateY, setFrontLayerTranslateY] = useState<number | undefined>(backLayerHeight)

  const animatedValue = useRef(new Animated.Value(revealed! ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: revealed ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [revealed])

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
          transform: [{ translateY: frontLayerTranslateYAnimated }]
        }, frontLayerStyle]}
      >
        {typeof subheader === 'string' ? <Subheader title={subheader} /> : subheader}
        {typeof subheaderDivider === "boolean" ? subheaderDivider && <Divider inset={16} /> : subheaderDivider}
        {children}
      </Surface>
    </View>
  )
}

Backdrop.defaultProps = {
  revealed: false
}

Backdrop.Subheader = Subheader

export default Backdrop