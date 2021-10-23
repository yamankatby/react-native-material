import React from "react";
import Touchable, { TouchableProps } from "./Touchable";

export interface TouchableSurfaceProps extends TouchableProps {

}

const TouchableSurface: React.FC<TouchableSurfaceProps> = ({ ...rest }) => {
  return <Touchable {...rest} />;
};

export default TouchableSurface;


// import React, { useMemo } from "react";
// import { Animated, StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
// import { Elevation, ShapeCategory, useTheme } from "./base";
// import Touchable, { TouchableProps } from "./Touchable";
//
// export interface TouchableSurfaceProps extends Omit<TouchableProps, "style"> {
//   category?: ShapeCategory | undefined;
//
//   absoluteSize?: boolean | undefined;
//
//   style?: Animated.AnimatedProps<ViewProps>["style"] | undefined;
//
//   containerStyle?: StyleProp<ViewStyle> | undefined;
//
//   touchableStyle?: StyleProp<ViewStyle> | undefined;
//
//   innerStyle?: StyleProp<ViewStyle> | undefined;
// }
//
// const TouchableSurface: React.FC<TouchableSurfaceProps> = ({
//   category,
//   absoluteSize,
//   style,
//   containerStyle,
//   touchableStyle,
//   innerStyle,
//   children,
//   ...rest
// }) => {
//   const {
//     borderTopStartRadius,
//     borderTopEndRadius,
//     borderBottomStartRadius,
//     borderBottomEndRadius,
//     borderTopLeftRadius,
//     borderTopRightRadius,
//     borderBottomLeftRadius,
//     borderBottomRightRadius,
//     borderRadius,
//     elevation,
//     ...restStyles
//   } = StyleSheet.flatten(style ?? {}) as ViewStyle
//
//   const { elevations, shapeScheme } = useTheme()
//
//   const radius = useMemo(() => shapeScheme[category!].borderRadius, [category, shapeScheme])
//
//   const shapeBorderRadius = useMemo(() => ({
//     borderTopStartRadius: borderTopStartRadius ?? borderTopLeftRadius ?? borderRadius ?? radius.topStart,
//     borderTopEndRadius: borderTopEndRadius ?? borderTopRightRadius ?? borderRadius ?? radius.topEnd,
//     borderBottomStartRadius: borderBottomStartRadius ?? borderBottomLeftRadius ?? borderRadius ?? radius.bottomStart,
//     borderBottomEndRadius: borderBottomEndRadius ?? borderBottomRightRadius ?? borderRadius ?? radius.bottomEnd,
//   }), [
//     radius,
//     borderTopStartRadius,
//     borderTopEndRadius,
//     borderBottomStartRadius,
//     borderBottomEndRadius,
//     borderTopLeftRadius,
//     borderTopRightRadius,
//     borderBottomLeftRadius,
//     borderBottomRightRadius,
//     borderRadius,
//   ])
//
//   return (
//     <Touchable
//       rippleColor={rest.overlayColor}
//       style={[containerStyle, touchableStyle, innerStyle, restStyles, elevations[elevation as Elevation], shapeBorderRadius]}>
//       {children}
//     </Touchable>
//     // <Animated.View style={[restStyles, elevations[elevation as Elevation], shapeBorderRadius]}>
//     //   <View
//     //     style={[absoluteSize && StyleSheet.absoluteFillObject, shapeBorderRadius, { overflow: "hidden" }, containerStyle]}
//     //   >
//     // <Touchable
//     //   style={[restStyles, elevations[elevation as Elevation], shapeBorderRadius, innerStyle]} {...rest}>
//     //   {children}
//     // </Touchable>
//     //   </View>
//     // </Animated.View>
//   );
// };
//
// TouchableSurface.defaultProps = {
//   category: "small",
// };
//
// export default TouchableSurface;
