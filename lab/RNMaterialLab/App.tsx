import React from 'react';
import {Platform, SafeAreaView, useColorScheme, View} from 'react-native';
import {
  createTheme,
  ThemeProvider,
  useStyleSheet,
} from '@react-native-material/lab/lib/foundation';
import Shape from './src/shape/Shape';
import Typography from './src/typography/Typography';
import FAB from './src/fab/FAB';
import Surface from './src/surface/Surface';

const DemoApp = () => {
  const styles = useStyleSheet(({colors, typographyStyles, elevations}) => ({
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
      <Shape style={styles.appBar} elevation={4} size={0}>
        <Typography variant={'h6'} color={'onPrimary'}>
          Home
        </Typography>
      </Shape>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.contentContainer}>
          <Typography variant="h1">Hi</Typography>
          <Typography variant="h2">Welcome back!</Typography>
          <Typography>This is my name</Typography>

          <Surface style={{width: 180, height: 90}} elevation={6}></Surface>
        </View>
        <FAB />
      </SafeAreaView>
    </View>
  );
};

const App = () => {
  const mode = useColorScheme();
  return (
    <ThemeProvider theme={createTheme({mode: mode ?? 'light'})}>
      <DemoApp />
    </ThemeProvider>
  );
};

export default App;
