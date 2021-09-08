import chroma from "chroma-js";
import { useStyleSheet } from "../base";

export interface DividerStylesProps {
  color?: string | undefined;

  inset?: number | undefined;

  leadingInset?: number | undefined;

  trailingInset?: number | undefined;
}

export const useDividerStyles = ({
  color,
  inset,
  leadingInset,
  trailingInset
}: DividerStylesProps) => useStyleSheet(({ colorScheme }) => ({
  divider: {
    height: 1,
    backgroundColor: color ?? chroma(colorScheme.onSurface).alpha(0.15).hex(),
    marginStart: inset ?? leadingInset,
    marginEnd: inset ?? trailingInset
  }
}), [color, inset, leadingInset, trailingInset])