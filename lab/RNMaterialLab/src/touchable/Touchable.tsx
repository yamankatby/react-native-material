import React from 'react';
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

type Props = TouchableHighlightProps &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps &
  TouchableNativeFeedbackProps;

export interface TouchableProps extends Props {
  iosVariant?: 'highlight' | 'opacity' | 'without-feedback';
  androidVariant?: TouchableProps['iosVariant'] | 'native-feedback';
}

const Touchable: React.FC<TouchableProps> = ({
  iosVariant,
  androidVariant,
  ...rest
}) => {
  if (Platform.OS === 'ios') {
    switch (iosVariant!) {
      case 'highlight':
        return <TouchableHighlight {...rest} />;
      case 'opacity':
        return <TouchableOpacity {...rest} />;
      case 'without-feedback':
        return <TouchableWithoutFeedback {...rest} />;
    }
  } else {
    switch (androidVariant!) {
      case 'highlight':
        return <TouchableHighlight {...rest} />;
      case 'opacity':
        return <TouchableOpacity {...rest} />;
      case 'without-feedback':
        return <TouchableWithoutFeedback {...rest} />;
      case 'native-feedback':
        return <TouchableNativeFeedback {...rest} />;
    }
  }
};

Touchable.defaultProps = {
  iosVariant: 'highlight',
  androidVariant: 'native-feedback',
};

export default Touchable;
