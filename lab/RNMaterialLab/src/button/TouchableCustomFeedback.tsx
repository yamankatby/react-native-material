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
   * Behavior of the Touchable component on iOS.
   * @default 'highlight'
   */
  iosBehavior?: TouchableCustomFeedbackBehavior | undefined;
  /**
   * Behavior of the Touchable component on Android.
   * @default 'native-feedback'
   */
  androidBehavior?: TouchableCustomFeedbackBehavior | undefined;
  /**
   * Custom color will override the `underlay` prop for the TouchableHighlight component
   * and the `background` prop for the TouchableNativeFeedback component.
   * @default 'black'
   */
  overlayColor?: string | undefined;
  /**
   *
   */
  accessibilityLabel?: string | undefined;
  /**
   *
   */
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  /**
   *
   */
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  /**
   * Extra props object will be spread on the Touchable component.
   */
  extraTouchableProps?: TouchableProps | undefined;
}

const TouchableCustomFeedback: React.FC<
  TouchableProps & TouchableCustomFeedbackProps
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
