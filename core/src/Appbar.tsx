import React from 'react'
import { Platform, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Surface from "./Surface";
import Typography from "./Typography";
import { useStyleSheet } from "./base";

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

export interface AppbarStylesProps {
  hasLeadingAction: boolean;
}

export const useAppbarStyles = ({ hasLeadingAction }: AppbarStylesProps) => useStyleSheet(({ colorScheme }) => ({
  container: {
    backgroundColor: colorScheme.primary,
    borderRadius: 0,
    elevation: 4
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    marginHorizontal: 16
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 24
  },
  title: {
    ...Platform.select({
      ios: {
        textAlign: 'center'
      }
    })
  },
  leadingActionContainer: {
    ...Platform.select({
      ios: {
        flex: 1
      },
      default: {
        paddingEnd: hasLeadingAction ? 32 : 0
      }
    })
  },
  trailingActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        flex: 1
      }
    })
  }
}), [hasLeadingAction])

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