import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import chroma from "chroma-js";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";
import { Surface, useStyles, useTheme } from "../../core";
import { changeTheme, useAppDispatch, useAppSelector } from "../config/store";
import * as Analytics from "expo-firebase-analytics";
import { useEffect } from "react";

const BackdropHiddenSection: React.FC = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme);

  const navigation = useNavigation();

  const styles = useStyles(
    ({ colorScheme, shapeScheme, typographyScheme }) => ({
      container: {},
      divider: {
        marginHorizontal: 16,
        height: 1,
        backgroundColor:
          currentTheme === "default"
            ? chroma(colorScheme.onPrimary).alpha(0.2).hex()
            : colorScheme.primaryVariant,
      },
      title: {
        marginTop: 16,
        marginStart: 16,
        color: colorScheme.onPrimary,
        ...typographyScheme.subtitle1,
      },
      section: {
        marginTop: 12,
        marginBottom: 16,
      },
      chip: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        marginEnd: 6,
        backgroundColor:
          currentTheme === "default"
            ? chroma(colorScheme.onPrimary).alpha(0.2).hex()
            : colorScheme.primaryVariant,
        borderRadius: shapeScheme.small.family === "rounded" ? 15 : undefined,
      },
      chipTitle: {
        marginHorizontal: 16,
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
      schemeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginBottom: 8,
      },
      scheme: {
        flex: 1,
        justifyContent: "center",
        marginStart: 32,
        backgroundColor:
          currentTheme === "default"
            ? chroma(colorScheme.onPrimary).alpha(0.2).hex()
            : colorScheme.primaryVariant,
      },
      schemeTitle: {
        marginStart: 16,
        color: colorScheme.onPrimary,
        ...typographyScheme.body2,
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

  const schemes = [
    { icon: "colorize", title: "Color Scheme", screen: "ColorScheme" },
    { icon: "format-shapes", title: "Shape Scheme", screen: "ShapeScheme" },
    {
      icon: "format-size",
      title: "Typography Scheme",
      screen: "TypographyScheme",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.title}>Material Studies</Text>
      <View style={styles.section}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingStart: 16, paddingEnd: 8 }}
        >
          {themes.map((theme) => (
            <TouchableOpacity
              key={theme}
              onPress={() => dispatch(changeTheme(theme as any))}
            >
              <Surface
                style={[
                  styles.chip,
                  theme === currentTheme && styles.selectedChip,
                ]}
              >
                <View>
                  <Text
                    style={[
                      styles.chipTitle,
                      theme === currentTheme && styles.selectedChipTitle,
                    ]}
                  >
                    {currentTheme === "fortnightly" && "#"}
                    {theme}
                  </Text>
                </View>
              </Surface>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.divider} />
      <Text style={styles.title}>Theming</Text>
      <View style={styles.section}>
        {schemes.map((scheme) => (
          <View key={scheme.title} style={styles.schemeContainer}>
            <MaterialIcons
              name={scheme.icon as any}
              size={24}
              color={theme.colorScheme.onPrimary}
            />
            <TouchableOpacity
              style={{ flex: 1, height: 38 }}
              onPress={() => navigation.navigate(scheme.screen as any)}
            >
              <Surface style={styles.scheme}>
                <View>
                  <Text style={styles.schemeTitle}>{scheme.title}</Text>
                </View>
              </Surface>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home: React.FC = () => {
  useEffect(() => {
    Analytics.setCurrentScreen("Main", "Main");
  }, []);

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
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0],
  });

  const handleToggleBackdrop = useCallback(() => {
    Animated.timing(backdropAnimation, {
      toValue: isBackdropOpened ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsBackdropOpened((prev) => !prev);
  }, [isBackdropOpened, backdropAnimation]);

  const { data } = useSWR(
    "https://api.github.com/repos/yamankatby/react-native-material/issues",
    fetcher
  );

  const colorScheme = useColorScheme();

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
                name="tune"
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
            onLayout={(e) => {
              setBackLayerHiddenSectionHeight(e.nativeEvent.layout.height);
            }}
          >
            <BackdropHiddenSection />
          </View>
        </View>
        <Surface
          category="large"
          style={[
            styles.frontLayerContainer,
            { transform: [{ translateY: frontLayerTranslate as any }] },
          ]}
        >
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Text
              style={[
                theme.typographyScheme.subtitle1,
                { color: theme.colorScheme.onBackground },
              ]}
            >
              Components
            </Text>
            <View
              style={{
                marginTop: 10,
                height: 1,
                backgroundColor: chroma(theme.colorScheme.onBackground)
                  .alpha(0.1)
                  .hex(),
              }}
            />
          </View>
          <FlatList
            numColumns={Math.ceil(Dimensions.get("window").width / 500)}
            contentContainerStyle={{
              marginHorizontal: 8,
              paddingBottom:
                insets.bottom + theme.shapeScheme.small.family === "rounded"
                  ? 56
                  : 68 + 32,
            }}
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Surface
                category="medium"
                style={{
                  flex: 1,
                  marginTop: 16,
                  marginHorizontal: 8,
                  backgroundColor:
                    currentTheme === "default" && colorScheme === "dark"
                      ? "#232323"
                      : theme.colorScheme.surface,
                  borderWidth:
                    (currentTheme === "default" && colorScheme === "light") ||
                    currentTheme === "owl"
                      ? 1
                      : 0,
                  borderColor: chroma(theme.colorScheme.onBackground)
                    .alpha(0.1)
                    .hex(),
                }}
              >
                <View style={{ margin: 16 }}>
                  <Text
                    style={[
                      theme.typographyScheme.h5,
                      { color: theme.colorScheme.onSurface },
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      theme.typographyScheme.body2,
                      { marginTop: 12, color: theme.colorScheme.onSurface },
                    ]}
                  >
                    {item.body}
                  </Text>

                  <Text
                    style={[
                      theme.typographyScheme.body2,
                      { color: theme.colorScheme.onSurface, marginTop: 12 },
                    ]}
                  >
                    status: waiting for 👍
                  </Text>

                  <TouchableOpacity
                    style={{ marginTop: 12, alignSelf: "flex-start" }}
                    onPress={() => {
                      Linking.openURL(item.html_url);
                    }}
                  >
                    <Text
                      style={[
                        theme.typographyScheme.button,
                        {
                          color:
                            currentTheme === "fortnightly"
                              ? theme.colorScheme.secondary
                              : currentTheme === "shrine"
                              ? theme.colorScheme.onSurface
                              : theme.colorScheme.primary,
                        },
                      ]}
                    >
                      Upvote
                    </Text>
                  </TouchableOpacity>
                </View>
              </Surface>
            )}
          />
        </Surface>
        <Surface
          style={[styles.fab, { transform: [{ scale: fabScale }] as any }]}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://github.com/yamankatby/react-native-material"
              );
            }}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="star"
              size={24}
              color={theme.colorScheme.onSecondary}
            />
          </TouchableOpacity>
        </Surface>
      </View>
    </>
  );
};

export default Home;
