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

export type TouchableType = "highlight" | "native-feedback" | "opacity" | "without-feedback";

export type TouchableCustomFeedbackProps = Partial<Record<PlatformOSType, TouchableType>> &
  TouchableHighlightProps &
  TouchableNativeFeedbackProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps;

const TouchableCustomFeedback: React.FC<TouchableCustomFeedbackProps> = ({
  android,
  ios,
  macos,
  native,
  web,
  windows,
  ...rest
}) => {
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

TouchableCustomFeedback.defaultProps = {
  android: "native-feedback",
  ios: "opacity",
  macos: "opacity",
  native: "native-feedback",
  web: "opacity",
  windows: "native-feedback"
};

export default TouchableCustomFeedback;
