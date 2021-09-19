import React, { useMemo } from "react";
import {
  Platform,
  PlatformOSType,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";
import chroma from "chroma-js";

export type TouchableVariant = "highlight" | "native-feedback" | "opacity" | "without-feedback";

export interface TouchableProps
  extends Partial<Record<PlatformOSType, TouchableVariant>>,
    TouchableHighlightProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps {
  overlayColor?: string | undefined;
}

const Touchable: React.FC<TouchableProps> = ({ android, ios, macos, native, web, windows, overlayColor, ...rest }) => {
  const color = useMemo(() => chroma(overlayColor!).alpha(0.2).hex(), [overlayColor]);
  switch (
    Platform.select({
      android: android!,
      ios: ios!,
      macos: macos!,
      native: native!,
      web: web!,
      windows: windows!,
    })
    ) {
    case "highlight":
      return <TouchableHighlight underlayColor={color} {...rest} />;
    case "native-feedback":
      return <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(color, false)} {...rest} />;
    case "opacity":
      return <TouchableOpacity {...rest} />;
    case "without-feedback":
      return <TouchableWithoutFeedback {...rest} />;
  }
};

Touchable.defaultProps = {
  android: "native-feedback",
  ios: "highlight",
  macos: "opacity",
  native: "opacity",
  web: "highlight",
  windows: "opacity",
  overlayColor: 'black',
};

export default Touchable;
