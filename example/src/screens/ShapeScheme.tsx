import React from "react";
import {
  ScrollView,
  useWindowDimensions,
  View,
  Text,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../core";

interface ShapeProps {
  unit: number;
  width: number;
  height: number;
  top: number;
  start: number;
  title?: string;
  style?: ViewStyle;
}

const Shape: React.FC<ShapeProps> = ({
  unit,
  width,
  height,
  top,
  start,
  title,
  style,
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          width: unit * width + 2,
          height: unit * height + 2,
          position: "absolute",
          top: top * unit - 1,
          start: start * unit - 1,
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "#FFE211",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {title && (
        <Text style={[theme.typographyScheme.h5, { color: "#FFC401" }]}>
          {title}
        </Text>
      )}
    </View>
  );
};

const ShapeScheme: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const unit = width / 22;

  const columns: JSX.Element[] = [];

  for (let index = 1; index < 22; index++) {
    columns.push(
      <View
        key={index}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          start: unit * index - 1,
          width: 2,
          backgroundColor: "#FFE211",
        }}
      />
    );
  }

  const rows: JSX.Element[] = [];

  for (let index = 1; index < 48; index++) {
    rows.push(
      <View
        key={index}
        style={{
          position: "absolute",
          top: unit * index - 1,
          start: 0,
          end: 0,
          height: 2,
          backgroundColor: "#FFE211",
        }}
      />
    );
  }

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          height: height > unit * 48 ? height : unit * 48,
          backgroundColor: "#FFF583",
        }}
      >
        {columns}
        {rows}

        <Shape
          unit={unit}
          width={5}
          height={5}
          top={2}
          start={2}
          title="S"
          style={{ borderTopStartRadius: unit * 2 }}
        />
        <Shape
          unit={unit}
          width={5}
          height={7}
          top={9}
          start={2}
          style={{ borderRadius: unit * 2.5 }}
        />
        <Shape
          unit={unit}
          width={5}
          height={5}
          top={18}
          start={2}
          style={{ borderRadius: unit * 2.5 }}
        />
        <Shape unit={unit} width={11} height={7} top={2} start={9} />
        <Shape unit={unit} width={11} height={7} top={11} start={9} title="M" />
        <Shape unit={unit} width={11} height={3} top={20} start={9} />
        <Shape
          unit={unit}
          width={18}
          height={13}
          top={25}
          start={2}
          title="L"
          style={{ borderTopStartRadius: unit, borderTopEndRadius: unit }}
        />
        <Shape
          unit={unit}
          width={18}
          height={6}
          top={40}
          start={2}
          style={{ borderTopStartRadius: unit, borderTopEndRadius: unit }}
        />
      </View>
    </ScrollView>
  );
};

export default ShapeScheme;
