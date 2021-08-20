import React from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import {
  createTheme,
  ThemeProvider,
  Typography,
  useStyleSheet,
  Button,
} from './src';
import FAB from './src/fab/FAB';

const App: React.FC = () => {
  const styles = useStyleSheet(({ colors }) => ({
    container: {
      margin: 16,
    },
    title: {
      color: colors.background.on,
    },
  }));
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Typography style={styles.title} variant="h2">
          Hi, welcome back!
        </Typography>

        <FAB color="error" overlayColor="black" onPress={() => {}} />
        <FAB family="cut" onPress={() => {}} />

        <Button title="Hi" onPress={() => {}} />
        <Button title="Google" family="cut" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const AppProvider: React.FC = () => {
  const mode = useColorScheme();
  return (
    <ThemeProvider
      theme={createTheme({ mode: mode === 'dark' ? 'dark' : 'light' })}>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
