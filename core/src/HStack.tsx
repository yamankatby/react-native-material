import React from "react";
import Stack, { StackProps } from "./Stack";

export interface HStackProps extends Omit<StackProps, "inline" | "direction"> {
  /**
   * If `true`, the stack will use `flexDirection: "row-reverse"` instead of `flexDirection: "row"`.
   *
   * @default false
   */
  reversed?: boolean;
}

const HStack: React.FC<HStackProps> = ({ reversed = false, ...rest }) => (
  <Stack {...rest} direction={reversed ? "row-reverse" : "row"} />
);

export default HStack;
