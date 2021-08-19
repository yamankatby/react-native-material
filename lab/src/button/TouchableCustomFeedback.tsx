import chroma from "chroma-js";
import React, { useMemo } from "react";
import {
  Platform,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

export type TouchableProps = TouchableHighlightProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps &
  TouchableNativeFeedbackProps;

export type TouchableCustomFeedbackVariant =
  | "highlight"
  | "opacity"
  | "without-feedback"
  | "native-feedback";

export interface TouchableCustomFeedbackProps {
  iosVariant?: TouchableCustomFeedbackVariant;
  androidVariant?: TouchableCustomFeedbackVariant;
  overlayColor?: string;
}

const TouchableCustomFeedback: React.FC<
  TouchableCustomFeedbackProps & TouchableProps
> = ({ iosVariant, androidVariant, overlayColor, ...rest }) => {
  const color = useMemo(
    () => chroma(overlayColor!).alpha(0.3).hex(),
    [overlayColor]
  );

  switch (Platform.OS === "ios" ? iosVariant! : androidVariant!) {
    case "highlight":
      return <TouchableHighlight underlayColor={color} {...rest} />;
    case "opacity":
      return <TouchableOpacity {...rest} />;
    case "without-feedback":
      return <TouchableWithoutFeedback {...rest} />;
    case "native-feedback":
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(color, false)}
          {...rest}
        />
      );
  }
};

TouchableCustomFeedback.defaultProps = {
  iosVariant: "highlight",
  androidVariant: "native-feedback",
  overlayColor: "black",
};

export default TouchableCustomFeedback;
