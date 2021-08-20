import {
  ShapeCategory,
  ShapeCornerRadius,
  ShapeFamily,
  ShapeSchema,
  ShapeValues,
} from "./shapeSchema";

export interface ShapeValuesOptions {
  family?: ShapeFamily | undefined;
  cornerRadius?: number | Partial<ShapeCornerRadius> | undefined;
}

export type ShapeSchemaOptions = Partial<
  Record<ShapeCategory, ShapeValuesOptions>
>;

const getCorner = (
  cornerRadius: ShapeValuesOptions["cornerRadius"],
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

export const createShapeSchema = (
  options?: ShapeSchemaOptions | undefined
): ShapeSchema => ({
  small: createShapeValues(options?.small, 4),
  medium: createShapeValues(options?.medium, 4),
  large: createShapeValues(options?.large, 4),
});
