import {
  createTheme,
  ThemeProvider,
} from '@react-native-material/lab/lib/foundation';
import React from 'react';
import {
  SafeAreaView,
  TouchableNativeFeedback,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import Button from './src/button/Button';

const DemoApp = () => {
  return (
    <SafeAreaView style={{ margin: 16 }}>
      <Button title="Button" style={{ alignSelf: 'flex-start' }} />
      <Button
        title="Button"
        color="secondary"
        loading
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
      />
      <Button
        title="Button"
        color="error"
        leading={({ color }) => (
          <View
            style={{
              backgroundColor: color,
              width: 18,
              height: 18,
              borderRadius: 9,
            }}
          />
        )}
        trailing={({ color }) => (
          <View
            style={{
              backgroundColor: color,
              width: 18,
              height: 18,
              borderRadius: 9,
            }}
          />
        )}
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
      />
      <Button
        title="home page"
        variant="outlined"
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
      />
      <Button
        title="Test button"
        variant="text"
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
      />
    </SafeAreaView>
  );
};

const F = () => {
  const mode = useColorScheme();
  return (
    <ThemeProvider
      theme={createTheme({
        mode: mode ?? 'light',
        shape: { small: { family: 'cut', size: 6 } },
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
