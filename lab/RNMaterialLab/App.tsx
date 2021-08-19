import React from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import {
  createTheme,
  ThemeProvider,
  Typography,
  useStyleSheet,
} from '@react-native-material/lab';

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
