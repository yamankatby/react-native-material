import React, { useState } from "react";
import { View } from "react-native";
import { Avatar, Banner, Button, Icon, ListItem, useTheme } from "@react-native-material/core";

const BannerScreen = () => {
  const { palette } = useTheme();
  const [illustration, setIllustration] = useState(true);
  return (
    <View>
      <Banner
        text="There was a problem processing a transaction on your credit card."
        illustration={
          illustration
            ? props => (
              <Avatar
                icon={<Icon name="credit-card-off-outline" size={24} color={palette.primary.on} />}
                color="primary"
                {...props}
              />
            )
            : null
        }
        buttons={[
          <Button variant="text" title="Fix it" compact onPress={() => undefined} />,
          <Button variant="text" title="Learn more" compact onPress={() => undefined} />,
        ]}
      />
      <ListItem
        title="Illustration"
        trailing={illustration ? props => <Icon name="check" {...props} /> : null}
        onPress={() => setIllustration(prevState => !prevState)}
      />
    </View>
  );
};

export default BannerScreen;
