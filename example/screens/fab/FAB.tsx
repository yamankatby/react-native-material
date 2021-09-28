import React, { useState } from "react";
import { Platform, Switch, Text, View } from "react-native";
import { FAB as FABComponent } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native'

export default function FAB() {
  const { params } = useRoute()
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <View style={{ flex: 1 }}>
      {(params?.section === undefined || params?.section === 'basic') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <FABComponent
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
        />
        <FABComponent
          icon={props => <Icon name="pencil" {...props} />}
          onPress={() => undefined}
          color="primary"
          style={{ marginStart: 16 }}
        />
        <FABComponent
          variant="extended"
          icon={props => <Icon name="navigation" {...props} />}
          label="Navigate"
          color="primary"
          onPress={() => undefined}
          style={{ marginStart: 16 }}
        />
      </View>
      }

      {(params?.section === undefined || params?.section === 'size') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <FABComponent
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          color="primary"
        />
        <FABComponent
          icon={props => <Icon name="plus" {...props} />}
          style={{ marginStart: 16 }}
          onPress={() => undefined}
          size="mini"
          color="primary"
        />
      </View>
      }

      {(params?.section === undefined || params?.section === 'size-extended') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <FABComponent
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="button"
          onPress={() => undefined}
          color="primary"
        />
        <FABComponent
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          style={{ marginStart: 16 }}
          onPress={() => undefined}
          label="button"
          size="mini"
          color="primary"
        />
      </View>
      }

      {(params?.section === undefined || params?.section === 'color') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <FABComponent
          icon={props => <Icon name="lock" {...props} />}
          onPress={() => undefined}
        />
        <FABComponent
          icon={props => <Icon name="lock" la {...props} />}
          tintColor="red"
          style={{ marginStart: 16 }}
          onPress={() => undefined}
        />
        <FABComponent
          icon={props => <Icon name="lock" {...props} />}
          color="onPrimary"
          style={{ marginStart: 16 }}
          onPress={() => undefined}
        />
        <FABComponent
          color="#fdac42"
          icon={props => <Icon name="lock" {...props} />}
          style={{ marginStart: 16 }}
          onPress={() => undefined}
        />
      </View>
      }

      {(params?.section === undefined || params?.section === 'loading') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <Switch value={isLoading} onValueChange={val => setIsLoading(val)} />
        <FABComponent
          icon={props => <Icon name="lock" {...props} />}
          loading={isLoading}
          onPress={() => undefined}
        />
        <FABComponent
          icon={props => <Icon name="lock" {...props} />}
          loading={isLoading}
          onPress={() => undefined}
          size="mini"
          style={{ marginStart: 16 }}
        />
      </View>
      }

      {(params?.section === undefined || params?.section === 'loading-extended') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <Switch value={isLoading} onValueChange={val => setIsLoading(val)} />
        <FABComponent
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="button"
          onPress={() => undefined}
          loading={isLoading}
          style={{ marginStart: 16 }}
          color="primary"
        />
        <FABComponent
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="button"
          loadingIndicator="Loading..."
          loadingIndicatorPosition="overlay"
          onPress={() => undefined}
          loading={isLoading}
          style={{ marginStart: 16 }}
          color="primary"
        />
        <FABComponent
          variant="extended"
          label="button"
          size="mini"
          color="onError"
          loadingIndicator={props => <Text style={{ color: props.color }}>⏰</Text>}
          loadingIndicatorPosition="icon"
          onPress={() => undefined}
          loading={isLoading}
          style={{ marginStart: 16 }}
        />
      </View>
      }

      {(params?.section === undefined || params?.section === 'visible') &&
      <View style={{
        flexDirection: 'row', ...Platform.select({
          web: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
      }}>
        <Switch value={isVisible} onValueChange={val => setIsVisible(val)} />
        <FABComponent
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          visible={isVisible}
        />
        <FABComponent
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          style={{ marginStart: 16 }}
          size="mini"
          visible={isVisible}
        />
        <FABComponent
          variant="extended"
          icon={props => <Icon name="navigation" {...props} />}
          label="Navigate"
          color="primary"
          onPress={() => undefined}
          style={{ marginStart: 16 }}
          visible={isVisible}
        />
        <FABComponent
          variant="extended"
          icon={props => <Icon name="navigation" {...props} />}
          label="Navigate"
          color="primary"
          size="mini"
          onPress={() => undefined}
          style={{ marginStart: 16 }}
          visible={isVisible}
        />
      </View>
      }
    </View>
  );
}
