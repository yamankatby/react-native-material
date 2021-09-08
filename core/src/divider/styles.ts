import chroma from "chroma-js";
import { useStyleSheet } from "../base";

export const useDividerStyles = (props: {
  color?: string | undefined;
  inset?: number | undefined;
  leadingInset?: number | undefined;
  trailingInset?: number | undefined;
}) => useStyleSheet(({ colorScheme }) => ({
  divider: {
    height: 1,
    backgroundColor: props.color ?? chroma(colorScheme.onSurface).alpha(0.15).hex(),
    marginStart: props.inset ?? props.leadingInset,
    marginEnd: props.inset ?? props.trailingInset
  }
}))