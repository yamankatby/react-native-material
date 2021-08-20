import React, { useMemo } from "react";
import {
  GestureResponderEvent,
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
import chroma from "chroma-js";

export type TouchableProps = TouchableHighlightProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps &
  TouchableNativeFeedbackProps;

export type TouchableCustomFeedbackBehavior =
  | "highlight"
  | "opacity"
  | "without-feedback"
  | "native-feedback";

export interface TouchableCustomFeedbackProps {
  /**
   * Behavior of the Touchable on iOS
   */
  iosBehavior?: TouchableCustomFeedbackBehavior;
  /**
   * Behavior of the Touchable on Android
   */
  androidBehavior?: TouchableCustomFeedbackBehavior;
  /**
   * Custom color will be used as `underlayColor` for TouchableHighlight and `background` for TouchableNativeFeedback
   */
  overlayColor?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  /**
   * Object of props will be passed to the Touchable component
   */
  extraTouchableProps?: TouchableProps;
}

const TouchableCustomFeedback: React.FC<
  TouchableCustomFeedbackProps & TouchableProps
> = ({
  iosBehavior,
  androidBehavior,
  overlayColor,
  extraTouchableProps,
  ...rest
}) => {
  const color = useMemo(
    () => chroma(overlayColor!).alpha(0.3).hex(),
    [overlayColor]
  );

  switch (Platform.OS === "ios" ? iosBehavior! : androidBehavior!) {
    case "highlight":
      return (
        <TouchableHighlight
          underlayColor={color}
          {...extraTouchableProps}
          {...rest}
        />
      );
    case "opacity":
      return <TouchableOpacity {...extraTouchableProps} {...rest} />;
    case "without-feedback":
      return <TouchableWithoutFeedback {...extraTouchableProps} {...rest} />;
    case "native-feedback":
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(color, false)}
          {...extraTouchableProps}
          {...rest}
        />
      );
  }
};

TouchableCustomFeedback.defaultProps = {
  iosBehavior: "highlight",
  androidBehavior: "native-feedback",
  overlayColor: "black",
};

export default TouchableCustomFeedback;
