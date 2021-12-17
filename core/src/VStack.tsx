import React from "react";
import Stack, { StackProps } from "./Stack";

export interface VStackProps extends Omit<StackProps, "inline" | "direction"> {
  /**
   * If `true`, the stack will use `flexDirection: "column-reverse"` instead of `flexDirection: "column"`.
   *
   * @default false
   */
  reversed?: boolean;
}

const VStack: React.FC<VStackProps> = ({ reversed = false, ...rest }) => (
  <Stack {...rest} direction={reversed ? "column-reverse" : "column"} />
);

export default VStack;
