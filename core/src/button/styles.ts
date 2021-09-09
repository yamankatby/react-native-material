import { ColorName, useStyleSheet } from "../base";

export interface ButtonStylesProps {
  variant: 'contained' | 'outlined' | 'text';
  color: ColorName;
  tintColor: ColorName;
  uppercase: boolean;
  disableElevation: boolean;
}

export const useButtonStyles = ({
  variant,
  color,
  tintColor,
  uppercase,
  disableElevation
}: ButtonStylesProps) => useStyleSheet(({ colorScheme }) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 64,
    height: 36,
    paddingHorizontal: 16,
    backgroundColor: variant === 'contained' ? colorScheme[color] : 'transparent',
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: colorScheme[color],
    elevation: variant === 'contained' && !disableElevation ? 2 : 0
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textTransform: uppercase ? 'uppercase' : 'none'
  },
  leadingContainer: {
    marginEnd: 8
  },
  trailingContainer: {
    marginStart: 8
  }
}), [variant, color, tintColor, uppercase, disableElevation])

export const useIconButtonStyles = () => useStyleSheet(({}) => ({}))