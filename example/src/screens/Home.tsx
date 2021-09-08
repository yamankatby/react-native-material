import { MaterialIcons } from "@expo/vector-icons";
import { Backdrop, Divider, Surface, useStyleSheet, useTheme } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/core";
import chroma from "chroma-js";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";
import { changeTheme, useAppDispatch, useAppSelector } from "../config/store";

const BackdropHiddenSection: React.FC = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme);

  const navigation = useNavigation();

  const styles = useStyleSheet(
    ({ colorScheme, shapeScheme, typographyScheme }) => ({
      title: {
        marginTop: 16,
        marginStart: 16,
        color: colorScheme.onPrimary,
        ...typographyScheme.subtitle1
      },
      section: {
        marginTop: 12,
        marginBottom: 16
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
        borderRadius: shapeScheme.small.family === "rounded" ? 15 : undefined
      },
      chipTitle: {
        marginHorizontal: 16,
        color: colorScheme.onPrimary,
        textTransform:
          currentTheme === "fortnightly" ? "uppercase" : "capitalize",
        ...typographyScheme.body2
      },
      selectedChip: {
        backgroundColor: colorScheme.onPrimary
      },
      selectedChipTitle: {
        color: colorScheme.primary
      },
      schemeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginBottom: 8
      },
      scheme: {
        flex: 1,
        justifyContent: "center",
        marginStart: 32,
        backgroundColor:
          currentTheme === "default"
            ? chroma(colorScheme.onPrimary).alpha(0.2).hex()
            : colorScheme.primaryVariant
      },
      schemeTitle: {
        marginStart: 16,
        color: colorScheme.onPrimary,
        ...typographyScheme.body2
      }
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
      "shrine"
    ],
    []
  );

  const schemes = [
    { icon: "colorize", title: "Color Scheme", screen: "ColorScheme" },
    { icon: "format-shapes", title: "Shape Scheme", screen: "ShapeScheme" },
    {
      icon: "format-size",
      title: "Typography Scheme",
      screen: "TypographyScheme"
    }
  ];

  return (
    <View>
      <Divider
        inset={16}
        color={
          currentTheme === "default" ? chroma(theme.colorScheme.onPrimary).alpha(0.2).hex() : theme.colorScheme.primaryVariant
        }
      />
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
                  theme === currentTheme && styles.selectedChip
                ]}
              >
                <View>
                  <Text
                    style={[
                      styles.chipTitle,
                      theme === currentTheme && styles.selectedChipTitle
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

      <Divider
        inset={16}
        color={
          currentTheme === "default" ? chroma(theme.colorScheme.onPrimary).alpha(0.2).hex() : theme.colorScheme.primaryVariant
        }
      />

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

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home: React.FC = () => {
  const insets = useSafeAreaInsets();

  const theme = useTheme();

  const currentTheme = useAppSelector((state) => state.theme);

  const styles = useStyleSheet(
    ({ colorScheme, shapeScheme, typographyScheme }) => ({
      appBar: {
        marginTop: insets.top,
        marginHorizontal: 16,
        height: 56,
        flexDirection: "row",
        alignItems: "center"
      },
      appBarTitle: {
        marginStart: 32,
        color: colorScheme.onPrimary,
        ...typographyScheme.h6
      },
      backLayerTitle: {
        position: "absolute",
        start: 56,
        color: colorScheme.onPrimary,
        ...typographyScheme.h6
      },
      backLayerSectionTitle: {
        marginVertical: 8,
        marginStart: 16,
        ...typographyScheme.subtitle1,
        color: colorScheme.onPrimary
      },
      fab: {
        position: "absolute",
        end: 16,
        bottom: insets.bottom + 16,
        width: shapeScheme.small.family === "rounded" ? 56 : 68,
        height: shapeScheme.small.family === "rounded" ? 56 : 68,
        borderRadius: shapeScheme.small.family === "rounded" ? 28 : 34,
        backgroundColor: colorScheme.secondary
      }
    }),
    [insets.top, insets.bottom, currentTheme]
  );

  const [isBackdropOpened, setIsBackdropOpened] = useState(false);

  const backdropAnimation = useRef(new Animated.Value(0)).current;

  const appBarTitleOpacity = backdropAnimation.interpolate({
    inputRange: [0, 0.6],
    outputRange: [1, 0]
  });

  const backLayerTitleOpacity = backdropAnimation.interpolate({
    inputRange: [0.4, 1],
    outputRange: [0, 1]
  });

  const fabScale = backdropAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0]
  });

  const handleToggleBackdrop = useCallback(() => {
    Animated.timing(backdropAnimation, {
      toValue: isBackdropOpened ? 0 : 1,
      duration: 300,
      useNativeDriver: true
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
      <Backdrop
        frontLayerStyle={{
          borderTopStartRadius: currentTheme === "default" ? 16 : undefined,
          borderTopEndRadius: currentTheme === "default" ? 16 : undefined
        }}
        revealed={isBackdropOpened}
        header={<View style={styles.appBar}>
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
              { opacity: backLayerTitleOpacity }
            ]}
          >
            Theming
          </Animated.Text>
        </View>}
        backLayer={<BackdropHiddenSection />}
        subheader="Components"
        subheaderDivider
      >
        <FlatList
          numColumns={Math.ceil(Dimensions.get("window").width / 500)}
          contentContainerStyle={{
            marginHorizontal: 8,
            paddingBottom:
              insets.bottom + theme.shapeScheme.small.family === "rounded"
                ? 56
                : 68 + 32
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
                    : theme.colorScheme.background,
                borderWidth:
                  (currentTheme === "default" && colorScheme === "light") ||
                  currentTheme === "owl"
                    ? 1
                    : 0,
                borderColor: chroma(theme.colorScheme.onBackground)
                  .alpha(0.1)
                  .hex()
              }}
            >
              <View style={{ margin: 16 }}>
                <Text
                  style={[
                    theme.typographyScheme.h5,
                    { color: theme.colorScheme.onSurface }
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    theme.typographyScheme.body2,
                    { marginTop: 12, color: theme.colorScheme.onSurface }
                  ]}
                >
                  {item.body}
                </Text>

                <Text
                  style={[
                    theme.typographyScheme.body2,
                    { color: theme.colorScheme.onSurface, marginTop: 12 }
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
                              : theme.colorScheme.primary
                      }
                    ]}
                  >
                    Upvote
                  </Text>
                </TouchableOpacity>
              </View>
            </Surface>
          )}
        />
      </Backdrop>

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
            alignItems: "center"
          }}
        >
          <MaterialIcons
            name="star"
            size={24}
            color={theme.colorScheme.onSecondary}
          />
        </TouchableOpacity>
      </Surface>
    </>
  );
};

export default Home;
