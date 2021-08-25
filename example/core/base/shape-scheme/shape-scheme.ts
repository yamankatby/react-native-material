export type ShapeCategory = "small" | "medium" | "large";

export type ShapeFamily = "rounded" | "cut";

export interface ShapeBorderRadius {
  topStart: number;
  topEnd: number;
  bottomStart: number;
  bottomEnd: number;
}

export interface ShapeValues {
  family: ShapeFamily;
  borderRadius: ShapeBorderRadius;
}

export type ShapeScheme = Record<ShapeCategory, ShapeValues>;
