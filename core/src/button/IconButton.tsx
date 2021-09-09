import React from 'react'
import { useIconButtonStyles } from "./styles";
import { View } from "react-native";

export interface IconButtonProps {
  icon: React.ReactElement
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  const styles = useIconButtonStyles()
  return (
    <View>
      {icon}
    </View>
  )
}

IconButton.defaultProps = {}

export default IconButton