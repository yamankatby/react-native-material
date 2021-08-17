export type ShapeCategory = "small" | "medium" | "large";
export type ShapeFamily = "rounded" | "cut";
export type ShapeSize = number | [number, number, number, number];

export interface ShapeConfig {
  family: ShapeFamily;
  size: ShapeSize;
}

export type ShapeSchema = Record<ShapeCategory, ShapeConfig>

export type ShapeOptions = Partial<ShapeSchema>

export const createShapeSchema = (options: ShapeOptions = {}): ShapeSchema => ({
  small: { family: "rounded", size: 4 },
  medium: { family: "rounded", size: 4 },
  large: { family: "rounded", size: 0 },
  ...options
});
