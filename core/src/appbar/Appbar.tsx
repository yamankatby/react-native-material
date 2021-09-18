import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Surface } from "../surface";
import Typography from "../Typography";
import { useAppbarStyles } from "./styles";

export interface AppbarProps {
  title?: string | undefined;

  leadingAction?: React.ReactElement | undefined;

  trailingActions?: React.ReactElement[] | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  contentContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleStyle?: StyleProp<TextStyle> | undefined;

  leadingActionContainerStyle?: StyleProp<ViewStyle> | undefined;

  trailingActionsContainerStyle?: StyleProp<ViewStyle> | undefined;
}

const Appbar: React.FC<AppbarProps> = ({
  title,
  leadingAction,
  trailingActions,
  style,
  contentContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingActionContainerStyle,
  trailingActionsContainerStyle
}) => {
  const styles = useAppbarStyles({ hasLeadingAction: !!leadingAction })
  return (
    <Surface style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <View style={[styles.leadingActionContainer, leadingActionContainerStyle]}>
          {leadingAction && leadingAction}
        </View>
        {title &&
        <View style={[styles.titleContainer, titleContainerStyle]}>
          <Typography variant="h6" color="onPrimary" style={[styles.title, titleStyle]}>{title}</Typography>
        </View>
        }
        <View style={[styles.trailingActionsContainer, trailingActionsContainerStyle]}>
          {trailingActions?.map((action, index) => (
            <React.Fragment key={index}>
              {action}
              {index < trailingActions.length - 1 && <View style={{ width: 24, height: 24 }} />}
            </React.Fragment>
          ))}
        </View>
      </View>
    </Surface>
  )
}

export default Appbar