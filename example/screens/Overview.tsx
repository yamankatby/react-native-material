import React, { useEffect } from "react";
import { Platform, SafeAreaView } from "react-native";
import { Avatar, IconButton, ListItem } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Overview = () => {
  useEffect(() => {
    if (Platform.OS !== "web") return;
    const style = document.createElement("style");
    style.textContent = `textarea, select, input, button { outline: none!important; }`;
    document.head.append(style);
  }, []);

  return (
    <SafeAreaView>
      <ListItem
        title="Sbutitle 1"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        overline="Overline"
        meta="May 18"
        leadingMode="image"
        leading={true}
        // leading={<Avatar label="Y k"/>}
        trailing={<IconButton icon={<MaterialCommunityIcons name={"eye"} size={24} />} />}
      />
      <ListItem
        title="Sbutitle 1"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias at doloribus ex nostrum."
        overline="Overline"
        meta="May 18"
      />
      <ListItem
        title="Sbutitle 1"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae quaerat rerum sint ullam."
        overline="Overline"
        meta="May 18"
      />
      <ListItem
        title="Sbutitle 1"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quae totam voluptate. Beatae, saepe!"
        overline="Overline"
        meta="May 18"
      />
      <ListItem
        title="Sbutitle 1"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi esse pariatur quibusdam repudiandae sunt!"
        overline="Overline"
        meta="May 18"
      />
    </SafeAreaView>
  );
};

export default Overview;
