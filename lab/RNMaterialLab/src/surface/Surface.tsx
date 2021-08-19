import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';
import { ShapeCategory, ShapeFamily, useTheme } from '../foundation';
import CutSurface from './CutSurface';
import RoundedSurface from './RoundedSurface';
import {
  TouchableCustomFeedbackProps,
  TouchableProps,
} from '../button/TouchableCustomFeedback';

export interface SharedSurfaceProps extends TouchableCustomFeedbackProps {
  category?: ShapeCategory;
  style?: ViewStyle | (ViewStyle | undefined)[];

  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  touchableProps?: TouchableProps;
}

export interface SurfaceProps extends SharedSurfaceProps {
  family?: ShapeFamily;
}

const Surface: React.FC<SurfaceProps> = ({ family, ...rest }) => {
  const theme = useTheme();

  return (family ?? theme.shapeSchema[rest.category!].family) === 'rounded' ? (
    <RoundedSurface {...rest} />
  ) : (
    <CutSurface {...rest} />
  );
};

Surface.defaultProps = {
  category: 'small',
};

export default Surface;
