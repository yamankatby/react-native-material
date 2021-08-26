import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useTheme, useStyles, TypographyVariant } from "../../core";

interface PreviewPorps {
  title: string;
  variant: TypographyVariant;
}

const Preview: React.FC<PreviewPorps> = ({ title, variant }) => {
  const { typographyScheme } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 16 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Text style={typographyScheme[variant]}>{title}</Text>
    </ScrollView>
  );
};

const TypographyScheme: React.FC = () => {
  return (
    <ScrollView>
      {/* <Preview title="Headline 1" variant="h1" />
      <Preview title="Headline 2" variant="h2" />
      <Preview title="Headline 3" variant="h3" />
      <Preview title="Headline 4" variant="h4" />
      <Preview title="Headline 5" variant="h5" />
      <Preview title="Headline 6" variant="h6" />
      <Preview title="Subtitle 1" variant="subtitle1" />
      <Preview title="Subtitle 2" variant="subtitle2" />
      <Preview title="Body 1" variant="body1" />
      <Preview title="Body 2" variant="body2" />
      <Preview title="Button" variant="button" />
      <Preview title="Caption" variant="caption" />
      <Preview title="Overline" variant="overline" /> */}
    </ScrollView>
  );
};

export default TypographyScheme;
