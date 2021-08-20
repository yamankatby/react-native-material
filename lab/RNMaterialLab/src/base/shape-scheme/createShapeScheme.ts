import {
  ShapeCategory,
  ShapeCornerRadius,
  ShapeFamily,
  ShapeSchema,
  ShapeValues,
} from "../../foundation";

export interface ShapeValuesOptions {
  family?: ShapeFamily | undefined;
  cornerRadius?: number | Partial<ShapeCornerRadius> | undefined;
}

export type ShapeSchemeOptions = Partial<
  Record<ShapeCategory, ShapeValuesOptions>
>;

const getCorner = (
  cornerRadius: ShapeValuesOptions["cornerRadius"] | undefined,
  corner: keyof ShapeCornerRadius
): number | undefined => {
  if (cornerRadius === undefined) return undefined;
  return typeof cornerRadius === "number" ? cornerRadius : cornerRadius[corner];
};

const createShapeValues = (
  options: ShapeValuesOptions | undefined,
  defaultValue: number
): ShapeValues => {
  const cornerRadius = options?.cornerRadius;
  return {
    family: options?.family ?? "rounded",
    cornerRadius: {
      topStart: getCorner(cornerRadius, "topStart") ?? defaultValue,
      topEnd: getCorner(cornerRadius, "topEnd") ?? defaultValue,
      bottomStart: getCorner(cornerRadius, "bottomStart") ?? defaultValue,
      bottomEnd: getCorner(cornerRadius, "bottomEnd") ?? defaultValue,
    },
  };
};

export const createShapeScheme = (
  options?: ShapeSchemeOptions | undefined
): ShapeSchema => {
  return {
    small: createShapeValues(options?.small, 4),
    medium: createShapeValues(options?.medium, 4),
    large: createShapeValues(options?.large, 0),
  };
};
