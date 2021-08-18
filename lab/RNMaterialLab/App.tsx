import {
  createTheme,
  ThemeProvider,
  useStyleSheet,
} from '@react-native-material/lab/lib/foundation';
import React from 'react';
import { Platform, SafeAreaView, useColorScheme, View } from 'react-native';
import Button from './src/button/Button';
import FAB from './src/fab/FAB';
import Shape from './src/shape/Shape';
import Typography from './src/typography/Typography';

const DemoApp = () => {
  const styles = useStyleSheet(({ colors, typographyStyles }) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background.main,
    },
    appBar: {
      height: Platform.OS === 'ios' ? 62 + 28 : 62,
      backgroundColor: colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 34,
    },
    contentContainer: {
      flex: 1,
      padding: 16,
    },
    title: {
      ...typographyStyles.h1,
      color: colors.background.on,
    },
  }));

  return (
    <View style={styles.container}>
      {/* <Shape style={styles.appBar} elevation={4} size={0}>
        <Typography variant={'h6'} color={'onPrimary'}>
          Home
        </Typography>
      </Shape> */}
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.contentContainer}>
          <View style={{ alignItems: 'flex-start' }}>
            <Button title="button" />
            <View style={{ height: 12 }} />
            <Button title="button" variant="outlined" />
            <View style={{ height: 12 }} />
            <Button title="button" variant="text" />
            <View style={{ height: 12 }} />
            <Button title="see all" loading color="error" disableElevation />
            <View style={{ height: 12 }} />
            <Button
              title="see all"
              color="error"
              variant="outlined"
              loading
              leading={({ color }) => (
                <View
                  style={{ width: 16, height: 16, backgroundColor: color }}
                />
              )}
              trailing={({ color }) => (
                <View
                  style={{ width: 16, height: 16, backgroundColor: color }}
                />
              )}
            />
            <View style={{ height: 12 }} />
            <Button title="Go to the homepage" variant="text" color="error" />
          </View>
        </View>
        <FAB />
      </SafeAreaView>
    </View>
  );
};

const F = () => {
  const mode = useColorScheme();
  return (
    <ThemeProvider
      theme={createTheme({
        mode: mode ?? 'light',
        shape: { small: { family: 'cut', size: 4 } },
      })}>
      <DemoApp />
    </ThemeProvider>
  );
};

const S = () => {
  const mode = useColorScheme();
  return (
    <ThemeProvider
      theme={createTheme({
        mode: mode ?? 'light',
        shape: { small: { family: 'rounded', size: 4 } },
      })}>
      <DemoApp />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <>
      <F />
      <S />
    </>
  );
};

export default App;
