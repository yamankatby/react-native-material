import React from "react";

export interface CutSurfaceProps {}

const CutSurface: React.FC<CutSurfaceProps> = () => {
  return null;
};

CutSurface.defaultProps = {};

export default CutSurface;

// import React, { useState } from "react";
// import { View } from "react-native";
// import Svg, { Polygon } from "react-native-svg";
// import { getShapeRadius, useTheme } from "../foundation";
// import { TouchableCustomFeedback } from "../button";
// import { SharedSurfaceProps } from "./Surface";

// const CutSurface: React.FC<SharedSurfaceProps> = ({
//   category,
//   style,
//   onPress,
//   onLongPress,
//   iosVariant,
//   androidVariant,
//   overlayColor,
//   children,
// }) => {
//   const {
//     backgroundColor,
//     borderWidth = 0,
//     borderColor,
//     ...rest
//   } = Array.isArray(style) ? Object.assign({}, ...style) : style;

//   const theme = useTheme();

//   const radius = getShapeRadius(rest, theme.shapeSchema[category!].radius);

//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);

//   return (
//     <View
//       style={rest}
//       onLayout={e => {
//         setWidth(e.nativeEvent.layout.width);
//         setHeight(e.nativeEvent.layout.height);
//       }}>
//       <Svg style={{ position: "absolute", width, height }}>
//         <Polygon
//           points={[
//             [borderWidth, radius.borderTopStartRadius + borderWidth],
//             [radius.borderTopStartRadius + borderWidth, borderWidth],
//             [width - radius.borderTopEndRadius - borderWidth, borderWidth],
//             [width - borderWidth, radius.borderTopEndRadius + borderWidth],
//             [
//               width - borderWidth,
//               height - radius.borderBottomEndRadius - borderWidth,
//             ],
//             [
//               width - radius.borderBottomEndRadius - borderWidth,
//               height - borderWidth,
//             ],
//             [
//               radius.borderBottomStartRadius + borderWidth,
//               height - borderWidth,
//             ],
//             [
//               borderWidth,
//               height - radius.borderBottomStartRadius - borderWidth,
//             ],
//           ].reduce((p, c) => `${p} ${c}`, "")}
//           fill={backgroundColor as any}
//           stroke={borderColor as any}
//           strokeWidth={borderWidth}
//         />
//       </Svg>
//       {!!(onPress || onLongPress) ? (
//         <View style={[radius, { overflow: "hidden" }]}>
//           <TouchableCustomFeedback
//             iosVariant={iosVariant}
//             androidVariant={androidVariant}
//             overlayColor={overlayColor}
//             onPress={onPress}
//             onLongPress={onLongPress}>
//             {children}
//           </TouchableCustomFeedback>
//         </View>
//       ) : (
//         children
//       )}
//     </View>
//   );
// };

// CutSurface.defaultProps = {
//   category: "small",
//   style: {},
// };

// export default CutSurface;
