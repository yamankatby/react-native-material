import {
  ShapeCategory,
  ShapeCornerRadius,
  ShapeFamily,
  ShapeSchema,
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

export const createShapeSchema = (
  options?: ShapeSchemaOptions | undefined
): ShapeSchema => {
  return {
    small: {
      family: options?.small?.family ?? "rounded",
      cornerRadius: {
        topStart: getCorner(options?.small?.cornerRadius, "topStart") ?? 4,
        topEnd: getCorner(options?.small?.cornerRadius, "topStart") ?? 4,
        bottomStart: getCorner(options?.small?.cornerRadius, "topStart") ?? 4,
        bottomEnd: getCorner(options?.small?.cornerRadius, "topStart") ?? 4,
      },
    },
    medium: {
      family: options?.medium?.family ?? "rounded",
      cornerRadius: {
        topStart: getCorner(options?.medium?.cornerRadius, "topStart") ?? 4,
        topEnd: getCorner(options?.medium?.cornerRadius, "topStart") ?? 4,
        bottomStart: getCorner(options?.medium?.cornerRadius, "topStart") ?? 4,
        bottomEnd: getCorner(options?.medium?.cornerRadius, "topStart") ?? 4,
      },
    },
    large: {
      family: options?.large?.family ?? "rounded",
      cornerRadius: {
        topStart: getCorner(options?.large?.cornerRadius, "topStart") ?? 0,
        topEnd: getCorner(options?.large?.cornerRadius, "topStart") ?? 0,
        bottomStart: getCorner(options?.large?.cornerRadius, "topStart") ?? 0,
        bottomEnd: getCorner(options?.large?.cornerRadius, "topStart") ?? 0,
      },
    },
  };
};
