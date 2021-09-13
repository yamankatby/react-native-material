import React, { useMemo, useState } from "react";
import { Dimensions, FlatList, Linking, ScrollView, useColorScheme, View } from "react-native";
import {
  Appbar,
  Backdrop,
  Divider,
  Surface,
  TouchableCustomFeedback,
  Typography,
  useStyleSheet,
  useTheme
} from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import chroma from "chroma-js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";
import { changeTheme, useAppDispatch, useAppSelector } from "../config/store";
import { StatusBar } from "expo-status-bar";

const BackdropHiddenSection: React.FC = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme);

  const navigation = useNavigation();

  const styles = useStyleSheet(
    ({ colorScheme }) => ({
      title: {
        marginTop: 16,
        marginStart: 16
      },
      section: {
        marginTop: 12,
        marginBottom: 16
      },
      chipTitle: {
        marginHorizontal: 16,
        textTransform: currentTheme === "fortnightly" ? "uppercase" : "capitalize"
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
          currentTheme === "default" ? chroma(colorScheme.onPrimary).alpha(0.2).hex() : colorScheme.primaryVariant
      },
      schemeTitle: {
        marginStart: 16
      }
    }),
    [currentTheme]
  );

  const themes = useMemo(() => ["default", "basil", "crane", "fortnightly", "owl", "reply", "shrine"], []);

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
          currentTheme === "default"
            ? chroma(theme.colorScheme.onPrimary).alpha(0.2).hex()
            : theme.colorScheme.primaryVariant
        }
      />
      <Typography variant="subtitle1" color="onPrimary" style={styles.title}>
        Material Studies
      </Typography>

      <View style={styles.section}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingStart: 16, paddingEnd: 8 }}
        >
          {themes.map((t) => (
            <Surface.Touchable
              key={t}
              onPress={() => dispatch(changeTheme(t as any))}
              style={{
                marginEnd: 6,
                borderRadius: theme.shapeScheme.small.family === "rounded" ? 15 : undefined
              }}
              innerStyle={{
                paddingVertical: 4,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  currentTheme === "default" ? chroma(theme.colorScheme.onPrimary).alpha(0.2).hex() : theme.colorScheme.primaryVariant
              }}
            >
              <Typography
                variant="body2"
                color="onPrimary"
                style={[styles.chipTitle, t === currentTheme && styles.selectedChipTitle]}
              >
                {currentTheme === "fortnightly" && "#"}
                {t}
              </Typography>
            </Surface.Touchable>
          ))}
        </ScrollView>
      </View>

      <Divider
        inset={16}
        color={
          currentTheme === "default"
            ? chroma(theme.colorScheme.onPrimary).alpha(0.2).hex()
            : theme.colorScheme.primaryVariant
        }
      />

      <Typography variant="subtitle1" color="onPrimary" style={styles.title}>
        Theming
      </Typography>
      <View style={styles.section}>
        {schemes.map((scheme) => (
          <View key={scheme.title} style={styles.schemeContainer}>
            <MaterialIcons name={scheme.icon as any} size={24} color={theme.colorScheme.onPrimary} />
            <TouchableCustomFeedback
              style={{ flex: 1, height: 38 }}
              onPress={() => navigation.navigate(scheme.screen as any)}
            >
              <Surface style={styles.scheme}>
                <View>
                  <Typography variant="body2" color="onPrimary" style={styles.schemeTitle}>
                    {scheme.title}
                  </Typography>
                </View>
              </Surface>
            </TouchableCustomFeedback>
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
    ({ colorScheme, shapeScheme }) => ({
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

  const [backdropRevealed, setBackdropRevealed] = useState(false);

  const { data } = useSWR("https://api.github.com/repos/yamankatby/react-native-material/issues", fetcher);

  const colorScheme = useColorScheme();

  const navigation = useNavigation()

  const flatlist = (
    <FlatList
      numColumns={Math.ceil(Dimensions.get("window").width / 500)}
      contentContainerStyle={{
        marginHorizontal: 8,
        paddingBottom: insets.bottom + theme.shapeScheme.small.family === "rounded" ? 56 : 68 + 32
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
              currentTheme === "default" && colorScheme === "dark" ? "#232323" : theme.colorScheme.background,
            borderWidth: (currentTheme === "default" && colorScheme === "light") || currentTheme === "owl" ? 1 : 0,
            borderColor: chroma(theme.colorScheme.onBackground).alpha(0.1).hex()
          }}
        >
          <View style={{ margin: 16 }}>
            <Typography variant="h5" color="onBackground">
              {item.title}
            </Typography>
            <Typography variant="body2" color="onBackground" style={{ marginTop: 12 }}>
              {item.body}
            </Typography>
            <Typography variant="body2" color="onBackground" style={{ marginTop: 12 }}>
              status: waiting for 👍
            </Typography>

            <TouchableCustomFeedback
              style={{ marginTop: 12, alignSelf: "flex-start" }}
              onPress={() => {
                Linking.openURL(item.html_url);
              }}
            >
              <Typography
                variant="button"
                color={
                  currentTheme === "fortnightly"
                    ? "secondary"
                    : currentTheme === "shrine"
                      ? "onBackground"
                      : "primary"
                }
              >
                Upvote
              </Typography>
            </TouchableCustomFeedback>
          </View>
        </Surface>
      )}
    />
  )

  const onFABPress = () => {
    Linking.openURL("https://github.com/yamankatby/react-native-material");
  }

  const fab = (
    <Surface.Touchable
      style={styles.fab}
      innerStyle={{ backgroundColor: theme.colorScheme.secondary, justifyContent: 'center', alignItems: 'center' }}
      absoluteSize
      onPress={onFABPress}
    >
      <MaterialIcons name="star" size={24} color={theme.colorScheme.onSecondary} />
    </Surface.Touchable>
  )

  return (
    <Backdrop
      frontLayerStyle={currentTheme === "default" && { borderTopStartRadius: 16, borderTopEndRadius: 16 }}
      revealed={backdropRevealed}
      header={
        <Appbar
          style={{ marginTop: insets.top, elevation: 0 }}
          title="Material UI"
          leadingAction={
            <TouchableCustomFeedback onPress={() => setBackdropRevealed((p) => !p)}>
              <MaterialIcons name="tune" size={24} color={theme.colorScheme.onPrimary} />
            </TouchableCustomFeedback>
          }
        />
      }
      headerHeight={insets.top + 56}
      backLayer={<BackdropHiddenSection />}
      subheader="Components"
      subheaderDivider
    >
      <StatusBar style={chroma.contrast(theme.colorScheme.primary, "white") > 4.5 ? "light" : "dark"} translucent />
      {fab}
    </Backdrop>
  );
};

export default Home;
