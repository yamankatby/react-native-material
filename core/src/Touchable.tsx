import React from "react";
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
  TouchableWithoutFeedbackProps
} from "react-native";

export type TouchableVariant = "highlight" | "native-feedback" | "opacity" | "without-feedback";

export type TouchableProps = Partial<Record<PlatformOSType, TouchableVariant>> &
  TouchableHighlightProps &
  TouchableNativeFeedbackProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps;

const Touchable: React.FC<TouchableProps> = ({ android, ios, macos, native, web, windows, ...rest }) => {
  switch (
    Platform.select({
      android: android!,
      ios: ios!,
      macos: macos!,
      native: native!,
      web: web!,
      windows: windows!
    })
    ) {
    case "highlight":
      return <TouchableHighlight {...rest} />;
    case "native-feedback":
      return <TouchableNativeFeedback {...rest} />;
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
  web: "opacity",
  windows: "opacity"
};

export default Touchable;
