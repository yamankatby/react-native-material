import { Platform } from "react-native";
import { useStyleSheet } from "../base";

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
