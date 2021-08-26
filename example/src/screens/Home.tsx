import chroma from "chroma-js";
import React, { useState, useRef } from "react";
import {
  Platform,
  StatusBar,
  Text,
  Animated,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles, useTheme } from "../../core";
import { MaterialIcons } from "@expo/vector-icons";

const Home: React.FC = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const x = insets.top + 56;
  const [height, setHeight] = useState(0);

  const fadeAnim = useRef(new Animated.Value(x)).current;

  const [opened, setOpened] = useState(false);

  const toggle = () => {
    Animated.timing(fadeAnim, {
      toValue: opened ? x : x + height,
      duration: 400,
      useNativeDriver: false,
    }).start();
    setOpened((p) => !p);
  };

  const styles = useStyles(
    ({ colorScheme, typographyScheme }) => ({
      container: {
        flex: 1,
        backgroundColor: colorScheme.primary,
      },
      appBar: {
        justifyContent: "center",
        height: 56,
        marginTop: insets.top,
        marginHorizontal: 16,
      },
      appBarContent: {
        flexDirection: "row",
        alignItems: "center",
      },
      backContent: {
        paddingBottom: 16,
        paddingHorizontal: 8,
      },
      frontContainer: {
        flex: 1,
        backgroundColor: colorScheme.background,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        paddingHorizontal: 16,
        position: "absolute",
        start: 0,
        end: 0,
        bottom: 0,
      },
      subheader: {
        marginVertical: 12,
        height: 24,
        justifyContent: "center",
      },
    }),
    [insets, height]
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={
          chroma.contrast(
            Platform.OS === "ios"
              ? theme.colorScheme.primary
              : theme.colorScheme.primaryVariant,
            "#FFFFFF"
          ) > 4.5
            ? "light-content"
            : "dark-content"
        }
        backgroundColor={theme.colorScheme.primaryVariant}
      />
      <View style={styles.appBar}>
        <View style={styles.appBarContent}>
          <TouchableOpacity onPress={toggle}>
            <MaterialIcons
              name="tune"
              size={24}
              color={theme.colorScheme.onPrimary}
            />
          </TouchableOpacity>
          <Text
            style={[
              theme.typographyScheme.h6,
              { marginStart: 32, color: theme.colorScheme.onPrimary },
            ]}
          >
            Material UI
          </Text>
        </View>
      </View>

      <View
        style={styles.backContent}
        onLayout={(e) => {
          setHeight(e.nativeEvent.layout.height);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: chroma(theme.colorScheme.onPrimary)
              .alpha(0.15)
              .hex(),
            padding: 8,
            borderRadius: 4,
            marginTop: 8,
          }}
        >
          <MaterialIcons
            name="palette"
            size={24}
            color={theme.colorScheme.onPrimary}
          />
          <Text
            style={[
              theme.typographyScheme.subtitle2,
              { marginStart: 32, color: theme.colorScheme.onPrimary },
            ]}
          >
            Color Scheme
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: chroma(theme.colorScheme.onPrimary)
              .alpha(0.15)
              .hex(),
            padding: 8,
            borderRadius: 4,
            marginTop: 8,
          }}
        >
          <MaterialIcons
            name="format-size"
            size={24}
            color={theme.colorScheme.onPrimary}
          />
          <Text
            style={[
              theme.typographyScheme.subtitle2,
              { marginStart: 32, color: theme.colorScheme.onPrimary },
            ]}
          >
            Typography Scheme
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: chroma(theme.colorScheme.onPrimary)
              .alpha(0.15)
              .hex(),
            padding: 8,
            borderRadius: 4,
            marginTop: 8,
          }}
        >
          <MaterialIcons
            name="format-shapes"
            size={24}
            color={theme.colorScheme.onPrimary}
          />
          <Text
            style={[
              theme.typographyScheme.subtitle2,
              { marginStart: 32, color: theme.colorScheme.onPrimary },
            ]}
          >
            Shape Scheme
          </Text>
        </View>
      </View>

      <Animated.View style={[styles.frontContainer, { top: fadeAnim }]}>
        <View style={styles.subheader}>
          <Text
            style={[
              theme.typographyScheme.subtitle1,
              { color: theme.colorScheme.onBackground },
            ]}
          >
            Components
          </Text>
        </View>
      </Animated.View>

      <View
        style={{
          position: "absolute",
          justifyContent: 'center',
          alignItems: 'center',
          bottom: insets.bottom + 16,
          end: 16,
          width: 58,
          height: 58,
          borderRadius: 58 / 2,
          backgroundColor: theme.colorScheme.secondary,
        }}
      >
        <MaterialIcons name="star" size={24} color={theme.colorScheme.onSecondary}/>
        </View>
    </View>
  );
};

export default Home;
