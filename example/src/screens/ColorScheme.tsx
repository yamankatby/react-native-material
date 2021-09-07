import { useTheme } from "@react-native-material/core";
import chroma from "chroma-js";
import * as Analytics from "expo-firebase-analytics";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PreviewPorps {
  index: number;
  name: string;
  color: string;
  on?: string;
  row?: boolean;
}

export const getOn = (color: string) =>
  chroma.contrast(color, "#FFFFFF") > 4.5 ? "#FFFFFF" : "#000000";

const Preview: React.FC<PreviewPorps> = ({ index, name, color, on, row }) => {
  const theme = useTheme();
  const onColor = on ?? getOn(color);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        height: row ? 100 : 186,
        margin: 0.5,
        padding: 16,
        backgroundColor: color
      }}
    >
      <Text style={[theme.typographyScheme.subtitle1, { color: onColor }]}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: row ? "space-between" : "flex-start",
          alignItems: "center"
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            height: 24,
            backgroundColor: onColor,
            borderRadius: 12
          }}
        >
          <Text
            style={[
              theme.typographyScheme.subtitle2,
              { color: getOn(onColor) }
            ]}
          >
            {index}
          </Text>
        </View>
        <Text
          style={[
            theme.typographyScheme.subtitle2,
            { marginStart: 12, color: onColor }
          ]}
        >
          {color}
        </Text>
      </View>
    </View>
  );
};

const ColorScheme: React.FC = () => {
  useEffect(() => {
    Analytics.setCurrentScreen("ColorScheme", "ColorScheme");
  }, []);

  const { mode, colorScheme } = useTheme();

  const insets = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor: mode === "light" ? "#E5E5E5" : "#292929" }}>
      <ScrollView>
        <View style={{ padding: 15, paddingBottom: insets.bottom + 15 }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Preview index={1} name="Primary" color={colorScheme.primary} />
              <Preview
                index={2}
                name="Primary Variant"
                color={colorScheme.primaryVariant}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Preview
                index={3}
                name="Secondary"
                color={colorScheme.secondary}
              />
              <Preview
                index={4}
                name="Secondary Variant"
                color={colorScheme.secondaryVariant}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Preview
              index={5}
              name="Background"
              color={colorScheme.background}
              row
            />
            <Preview index={6} name="Surface" color={colorScheme.surface} row />
            <Preview index={7} name="Error" color={colorScheme.error} row />
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Preview
                index={8}
                name="On Primary"
                color={colorScheme.onPrimary}
              />
              <Preview
                index={9}
                name="On Secondary"
                color={colorScheme.onSecondary}
              />
            </View>
          </View>
          <Preview
            index={10}
            name="On Background"
            color={colorScheme.onBackground}
            row
          />
          <Preview
            index={11}
            name="On Surface"
            color={colorScheme.onSurface}
            row
          />
          <Preview index={12} name="On Error" color={colorScheme.onError} row />
        </View>
      </ScrollView>
    </View>
  );
};

export default ColorScheme;
