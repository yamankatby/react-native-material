import React, { useMemo } from 'react';
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
} from 'react-native';
import chroma from 'chroma-js';

export type TouchableProps = TouchableHighlightProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps &
  TouchableNativeFeedbackProps;

export type TouchableVariant =
  | 'highlight'
  | 'opacity'
  | 'without-feedback'
  | 'native-feedback';

export interface TouchableCustomFeedbackProps {
  iosVariant?: TouchableVariant;
  androidVariant?: TouchableVariant;
  overlayColor?: string;
}

const TouchableCustomFeedback: React.FC<
  TouchableProps & TouchableCustomFeedbackProps
> = ({ iosVariant: ios, androidVariant: android, overlayColor, ...rest }) => {
  const color = useMemo(
    () => chroma(overlayColor!).alpha(0.2).hex(),
    [overlayColor],
  );

  switch (Platform.OS === 'ios' ? ios! : android!) {
    case 'highlight':
      return <TouchableHighlight underlayColor={color} {...rest} />;
    case 'opacity':
      return <TouchableOpacity {...rest} />;
    case 'without-feedback':
      return <TouchableWithoutFeedback {...rest} />;
    case 'native-feedback':
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(color, false)}
          {...rest}
        />
      );
  }
};

TouchableCustomFeedback.defaultProps = {
  iosVariant: 'highlight',
  androidVariant: 'native-feedback',
  overlayColor: 'black',
};

export default TouchableCustomFeedback;
