import { MaterialIcons } from "@expo/vector-icons";
import chroma from "chroma-js";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { Surface, useStyles, useTheme } from "../../core";
import { changeTheme, useAppSelector } from "../config/store";
import ShapeScheme from "./ShapeScheme";

const MaterialStudies: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useAppSelector((state) => state.theme);

  const styles = useStyles(
    ({ colorScheme, shapeScheme, typographyScheme }) => ({
      container: {
        marginBottom: 8,
      },
      contentContainer: {
        paddingStart: 16,
        paddingEnd: 8,
      },
      chip: {
        justifyContent: "center",
        alignItems: "center",
        height: 32,
        marginEnd: 8,
        backgroundColor: chroma(colorScheme.onPrimary).alpha(0.1).hex(),
        borderRadius: shapeScheme.small.family === "rounded" ? 16 : undefined,
      },
      chipTitle: {
        marginHorizontal: 12,
        color: colorScheme.onPrimary,
        textTransform:
          currentTheme === "fortnightly" ? "uppercase" : "capitalize",
        ...typographyScheme.body2,
      },
      selectedChip: {
        backgroundColor: colorScheme.onPrimary,
      },
      selectedChipTitle: {
        color: colorScheme.primary,
      },
    }),
    [currentTheme]
  );

  const themes = useMemo(
    () => [
      "default",
      "basil",
      "crane",
      "fortnightly",
      "owl",
      "reply",
      "shrine",
    ],
    []
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {themes.map((theme) => (
        <TouchableOpacity
          key={theme}
          onPress={() => dispatch(changeTheme(theme as any))}
        >
          <Surface
            style={[styles.chip, theme === currentTheme && styles.selectedChip]}
          >
            <Text
              style={[
                styles.chipTitle,
                theme === currentTheme && styles.selectedChipTitle,
              ]}
            >
              {currentTheme === "fortnightly" && "#"}
              {theme}
            </Text>
          </Surface>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const Theming: React.FC = () => {
  const theme = useTheme();

  const styles = useStyles(({ colorScheme, typographyScheme }) => ({
    container: {
      marginTop: 8,
      marginHorizontal: 16,
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    item: {
      flex: 1,
      marginStart: 32,
      backgroundColor: chroma(colorScheme.onPrimary).alpha(0.1).hex(),
    },
    itemTitle: {
      marginHorizontal: 16,
      marginVertical: 10,
      color: colorScheme.onPrimary,
      ...typographyScheme.body2,
    },
  }));

  const options = [
    { title: "Color Scheme" },
    { title: "Shape Scheme" },
    { title: "Typography Scheme" },
  ];

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option.title} style={styles.option}>
          <MaterialIcons
            name="message"
            size={24}
            color={theme.colorScheme.onPrimary}
          />
          <Surface style={styles.item}>
            <Text style={styles.itemTitle}>{option.title}</Text>
          </Surface>
        </View>
      ))}
    </View>
  );
};

const Home: React.FC = () => {
  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const currentTheme = useAppSelector((state) => state.theme);

  const styles = useStyles(
    ({ colorScheme, shapeScheme, typographyScheme }) => ({
      container: {
        flex: 1,
        backgroundColor: colorScheme.primary,
      },
      backLayerContainer: {
        paddingTop: insets.top,
      },
      appBar: {
        margin: 16,
        flexDirection: "row",
        alignItems: "center",
      },
      appBarTitle: {
        marginStart: 32,
        color: colorScheme.onPrimary,
        ...typographyScheme.h6,
      },
      backLayerTitle: {
        position: "absolute",
        start: 56,
        color: colorScheme.onPrimary,
        ...typographyScheme.h6,
      },
      backLayerDivider: {
        height: 1,
        marginHorizontal: 16,
        backgroundColor: chroma(colorScheme.onPrimary).alpha(0.1).hex(),
      },
      backLayerSectionTitle: {
        marginVertical: 8,
        marginStart: 16,
        ...typographyScheme.subtitle1,
        color: colorScheme.onPrimary,
      },
      frontLayerContainer: {
        position: "absolute",
        top: insets.top + 56,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: colorScheme.background,
        borderTopStartRadius: currentTheme === "default" ? 16 : undefined,
        borderTopEndRadius: currentTheme === "default" ? 16 : undefined,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
      },
      fab: {
        position: "absolute",
        end: 16,
        justifyContent: "center",
        alignItems: "center",
        bottom: insets.bottom + 16,
        width: shapeScheme.small.family === "rounded" ? 56 : 68,
        height: shapeScheme.small.family === "rounded" ? 56 : 68,
        borderRadius: shapeScheme.small.family === "rounded" ? 28 : 34,
        backgroundColor: colorScheme.secondary,
      },
    }),
    [insets.top, insets.bottom, currentTheme]
  );

  const [isBackdropOpened, setIsBackdropOpened] = useState(false);
  const [backLayerHiddenSectionHeight, setBackLayerHiddenSectionHeight] =
    useState(0);

  const backdropAnimation = useRef(new Animated.Value(0)).current;

  const frontLayerTranslate = backdropAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, backLayerHiddenSectionHeight],
  });

  const appBarTitleOpacity = backdropAnimation.interpolate({
    inputRange: [0, 0.6],
    outputRange: [1, 0],
  });

  const backLayerTitleOpacity = backdropAnimation.interpolate({
    inputRange: [0.4, 1],
    outputRange: [0, 1],
  });

  const fabScale = backdropAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const handleToggleBackdrop = useCallback(() => {
    Animated.timing(backdropAnimation, {
      toValue: isBackdropOpened ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    setIsBackdropOpened((prev) => !prev);
  }, [isBackdropOpened, backdropAnimation]);

  return (
    <>
      <StatusBar
        style={
          chroma.contrast(theme.colorScheme.primary, "white") > 4.5
            ? "light"
            : "dark"
        }
        translucent
      />
      <View style={styles.container}>
        <View style={styles.backLayerContainer}>
          <View style={styles.appBar}>
            <TouchableOpacity onPress={handleToggleBackdrop}>
              <MaterialIcons
                name="menu"
                size={24}
                color={theme.colorScheme.onPrimary}
              />
            </TouchableOpacity>
            <Animated.Text
              style={[styles.appBarTitle, { opacity: appBarTitleOpacity }]}
            >
              Material UI
            </Animated.Text>
            <Animated.Text
              style={[
                styles.backLayerTitle,
                { opacity: backLayerTitleOpacity },
              ]}
            >
              Theming
            </Animated.Text>
          </View>
          <View
            style={{ paddingBottom: 16 }}
            onLayout={(e) => {
              setBackLayerHiddenSectionHeight(e.nativeEvent.layout.height);
            }}
          >
            <View style={styles.backLayerDivider} />
            <Text style={styles.backLayerSectionTitle}>Material Studies</Text>
            <MaterialStudies />

            <View style={styles.backLayerDivider} />
            <Text style={styles.backLayerSectionTitle}>Theming</Text>
            <Theming />
          </View>
        </View>
        <Surface
          category="large"
          style={[
            styles.frontLayerContainer,
            { transform: [{ translateY: frontLayerTranslate as any }] },
          ]}
        ></Surface>
        <Surface
          style={[styles.fab, { transform: [{ scale: fabScale }] as any }]}
        >
          <MaterialIcons
            name="star"
            size={24}
            color={theme.colorScheme.onSecondary}
          />
        </Surface>
      </View>
    </>
  );
};

export default Home;
