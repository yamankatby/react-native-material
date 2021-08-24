import { Typography, usePaletteColor, useStyleSheet } from "../lab";
import React from "react";
import { ScrollView } from "react-native";

const TypographyExample: React.FC = () => {
  const styles = useStyleSheet(({ palette }) => ({
    text: {
      color: palette.background.on,
    },
  }));

  return (
    <ScrollView>
      <Typography style={styles.text} variant="h1">
        H1 Headline
      </Typography>
      <Typography style={styles.text} variant="h2">
        H2 Headline
      </Typography>
      <Typography style={styles.text} variant="h3">
        H3 Headline
      </Typography>
      <Typography style={styles.text} variant="h4">
        H4 Headline
      </Typography>
      <Typography style={styles.text} variant="h5">
        H5 Headline
      </Typography>
      <Typography style={styles.text} variant="h6">
        H6 Headline
      </Typography>
      <Typography style={styles.text} variant="subtitle1">
        Subtitle 1
      </Typography>
      <Typography style={styles.text} variant="subtitle2">
        Subtitle 2
      </Typography>
      <Typography style={styles.text} variant="body1">
        Body 1
      </Typography>
      <Typography style={styles.text} variant="body2">
        Body 2
      </Typography>
      <Typography style={styles.text} variant="button">
        Button
      </Typography>
      <Typography style={styles.text} variant="caption">
        Caption
      </Typography>
      <Typography style={styles.text} variant="overline">
        Overline
      </Typography>
    </ScrollView>
  );
};

export default TypographyExample;
