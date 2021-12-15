import React, { useCallback, useRef, useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, IconButton, Text, TextInput, useBoolean, useTheme, VStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialIcons";

const Login = () => {
  const { palette } = useTheme();
  const navigation = useNavigation();

  const passwordRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useBoolean(false);

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const [loading, setLoading] = useBoolean(false);
  const [error, setError] = useState(undefined);

  const handleSubmit = useCallback(async () => {
    setEmailError(undefined);
    setPasswordError(undefined);
    setError(undefined);

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    setLoading.on();
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading.off();
    } catch (e) {
      setLoading.off();
      setError(e.message);
    }
  }, [email, password]);

  return (
    <SafeAreaView>
      <VStack
        spacing={8}
        style={[
          { margin: 16 },
          Platform.OS === "web" && {
            maxWidth: 396,
            marginTop: 64,
            alignSelf: "center"
          }
        ]}
      >
        <VStack spacing={2} items="center">
          <Avatar icon={props => <Icon name="lock-outline" {...props} />} size={40} />
          <Text variant="h5" style={{ color: palette.onBackground }}>
            Sign in
          </Text>
          <Text variant="subtitle1" style={{ color: palette.onBackground, textAlign: "center" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, facere!
          </Text>
        </VStack>

        <VStack spacing={4}>
          <TextInput
            variant="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
            editable={!loading}
            helperText={emailError}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            onSubmitEditing={() => passwordRef.current?.focus()}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextInput
            ref={passwordRef}
            variant="outlined"
            label="Password"
            secureTextEntry={!passwordVisible}
            trailing={props => (
              <IconButton
                icon={props => <Icon name={passwordVisible ? "visibility-off" : "visibility"} {...props} />}
                onPress={setPasswordVisible.toggle}
                {...props}
              />
            )}
            value={password}
            onChangeText={setPassword}
            editable={!loading}
            helperText={passwordError}
            onSubmitEditing={handleSubmit}
            returnKeyType="done"
          />
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text variant="subtitle1" style={{ color: palette.onBackground }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </VStack>

        <VStack spacing={4}>
          <Button
            title="Sign in"
            disabled={loading}
            loading={loading}
            loadingIndicatorPosition="overlay"
            onPress={handleSubmit}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => navigation.navigate("Register")}>
            <Text variant="subtitle1" style={{ color: palette.onBackground }}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </SafeAreaView>
  )
}

export default Login
