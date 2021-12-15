import React from "react";
import { Text, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const TextScreen = () => {
  const { palette } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 16 }}>
      <Text variant="h1" style={{ color: palette.onBackground, marginTop: 16 }}>
        h1. Heading
      </Text>
      <Text variant="h2" style={{ color: palette.onBackground, marginTop: 16 }}>
        h2. Heading
      </Text>
      <Text variant="h3" style={{ color: palette.onBackground, marginTop: 16 }}>
        h3. Heading
      </Text>
      <Text variant="h4" style={{ color: palette.onBackground, marginTop: 16 }}>
        h4. Heading
      </Text>
      <Text variant="h5" style={{ color: palette.onBackground, marginTop: 16 }}>
        h5. Heading
      </Text>
      <Text variant="h6" style={{ color: palette.onBackground, marginTop: 16 }}>
        h6. Heading
      </Text>
      <Text variant="subtitle1" style={{ color: palette.onBackground, marginTop: 16 }}>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Text>
      <Text variant="subtitle2" style={{ color: palette.onBackground, marginTop: 16 }}>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Text>
      <Text variant="body1" style={{ color: palette.onBackground, marginTop: 16 }}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Text>
      <Text variant="body2" style={{ color: palette.onBackground, marginTop: 16 }}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Text>
      <Text variant="button" style={{ color: palette.onBackground, marginTop: 16 }}>
        BUTTON TEXT
      </Text>
      <Text variant="caption" style={{ color: palette.onBackground, marginTop: 16 }}>
        caption text
      </Text>
      <Text variant="overline" style={{ color: palette.onBackground, marginTop: 16 }}>
        overline text
      </Text>
    </ScrollView>
  );
};

export default TextScreen;
