import * as Analytics from "expo-firebase-analytics";
import React, { useEffect } from "react";
import { ScrollView, Text, TextStyle } from "react-native";
import { TypographyVariant, useTheme } from "../../core";
import { useAppSelector } from "../config/store";

interface PreviewPorps {
  title: string;
  variant: TypographyVariant;
  style?: TextStyle;
}

const Preview: React.FC<PreviewPorps> = ({ title, variant, style }) => {
  const { typographyScheme } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 16 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Text style={[typographyScheme[variant], style]}>{title}</Text>
    </ScrollView>
  );
};

const TypographyScheme: React.FC = () => {
  useEffect(() => {
    Analytics.setCurrentScreen("TypographyScheme", "TypographyScheme");
  }, []);

  const theme = useTheme();
  const currentTheme = useAppSelector((state) => state.theme);
  const palette = {
    basil: { background: "#DEF3E5", color: "#356859" },
    crane: { background: "#F0CCE2", color: "#5D1049" },
    fortnightly: { background: "#EDEDED", color: "#1E1E1E" },
    owl: { background: "#FFF583", color: "#211F10" },
    reply: { background: "#B4C1CC", color: "#2B3D45" },
    shrine: { background: "#FFF0E8", color: "#5C4445" },
    default: {
      background: theme.colorScheme.background,
      color: theme.colorScheme.onBackground,
    },
  };

  return (
    <ScrollView style={{ backgroundColor: palette[currentTheme].background }}>
      <Preview
        title="Headline 1"
        variant="h1"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Headline 2"
        variant="h2"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Headline 3"
        variant="h3"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Headline 4"
        variant="h4"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Headline 5"
        variant="h5"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Headline 6"
        variant="h6"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Subtitle 1"
        variant="subtitle1"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Subtitle 2"
        variant="subtitle2"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Body 1"
        variant="body1"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Body 2"
        variant="body2"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Button"
        variant="button"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Caption"
        variant="caption"
        style={{ color: palette[currentTheme].color }}
      />
      <Preview
        title="Overline"
        variant="overline"
        style={{ color: palette[currentTheme].color }}
      />
    </ScrollView>
  );
};

export default TypographyScheme;
