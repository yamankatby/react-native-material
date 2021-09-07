import { useStyleSheet } from "../base";

export const useBackdropStyles = () => useStyleSheet(({ colorScheme }) => ({
  container: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    overflow: 'hidden'
  },
  frontLayer: {
    position: 'absolute',
    start: 0,
    end: 0,
    bottom: 0,
    backgroundColor: colorScheme.background,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
}))