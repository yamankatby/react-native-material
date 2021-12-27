import React from "react";
import { Avatar, Icon, IconButton, ListItem, useTheme } from "@react-native-material/core";
import { Image, ScrollView } from "react-native";
import chroma from "chroma-js";

const ListItemScreen = () => {
  const { palette } = useTheme();
  return (
    <ScrollView>
      <ListItem title="Single-line item" />
      <ListItem title="Tow-line item" secondaryText="Lorem ipsum dolor sit amet." />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minus nobis rerum."
      />
      <ListItem title="Tow-line item" secondaryText="Lorem ipsum dolor sit amet." meta="15 mins" overline="Overline" />
      <ListItem
        title="Tow-line item"
        secondaryText="Lorem ipsum dolor sit amet."
        leading={<Icon name="image" size={24} color={chroma.scale([palette.surface.main, palette.surface.on])(0.87).hex()} />}
      />
      <ListItem
        title="Tow-line item"
        secondaryText="Lorem ipsum dolor sit amet."
        trailing={props => <IconButton icon={<Icon name="drag-horizontal-variant" {...props} />} {...props} />}
      />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minus nobis rerum."
        leadingMode="avatar"
        leading={
          <Avatar
            label="Remy Sharp"
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            style={{ backgroundColor: "transparent" }}
          />
        }
      />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet."
        leadingMode="image"
        leading={
          <Image
            source={{
              uri: "https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7OVJnOXR3Nlh1YzA/style-imagery-bestpractices-focus3.png",
            }}
            style={{ width: 100, height: 56 }}
          />
        }
      />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minus nobis rerum."
        onPress={() => undefined}
      />
    </ScrollView>
  );
};

export default ListItemScreen;
