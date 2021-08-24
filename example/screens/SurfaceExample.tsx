import { Elevation, Surface, Typography, useTheme } from "../lab";
import React from "react";
import { FlatList, View } from "react-native";

const data: Elevation[] = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];

const SurfaceExample: React.FC = () => {
  const theme = useTheme();

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      data={data}
      numColumns={2}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 160,
          }}
        >
          <Surface
            surfaceSize={{ width: 120, height: 120 }}
            elevation={item}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {}}
            overlayColor={theme.palette.surface.on}
            backgroundColor={theme.palette.elevationColors[item]}
          >
            <Typography style={{ color: theme.palette.surface.on }}>
              {item}
            </Typography>
          </Surface>
        </View>
      )}
      keyExtractor={(item) => `${item}`}
    />
  );
};

export default SurfaceExample;
