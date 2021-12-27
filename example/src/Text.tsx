import React from "react";
import { ScrollView } from "react-native";
import { Stack, Text, useSpacing } from "@react-native-material/core";

const TextScreen: React.FC = () => {
  const spacing = useSpacing();
  return (
    <ScrollView>
      <Stack spacing={4} style={{ padding: spacing(4) }}>
        <Text variant="h1">h1. Heading</Text>
        <Text variant="h2">h2. Heading</Text>
        <Text variant="h3">h3. Heading</Text>
        <Text variant="h4">h4. Heading</Text>
        <Text variant="h5">h5. Heading</Text>
        <Text variant="h6">h6. Heading</Text>
        <Text variant="subtitle1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Text>
        <Text variant="subtitle2">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Text>
        <Text variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Text>
        <Text variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Text>
        <Text variant="button">BUTTON TEXT</Text>
        <Text variant="caption">caption text</Text>
        <Text variant="overline">overline text</Text>
      </Stack>
    </ScrollView>
  );
};

export default TextScreen;
