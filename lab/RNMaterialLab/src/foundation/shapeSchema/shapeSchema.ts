export type ShapeCategory = "small" | "medium" | "large";

export type ShapeFamily = "rounded" | "cut";

export interface ShapeCornerRadius {
  topStart: number;
  topEnd: number;
  bottomStart: number;
  bottomEnd: number;
}

export interface ShapeValues {
  family: ShapeFamily;
  cornerRadius: ShapeCornerRadius;
}

export type ShapeSchema = Record<ShapeCategory, ShapeValues>;
