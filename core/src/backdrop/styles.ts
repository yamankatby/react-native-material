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
    backgroundColor: colorScheme.surface,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0
  }
}))

export const useSubheaderStyles = () => useStyleSheet(({ colorScheme, typographyScheme }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  title: {
    flex: 1
  },
  leadingContainer: {
    marginEnd: 12
  },
  trailingContainer: {
    marginStart: 12
  }
}))