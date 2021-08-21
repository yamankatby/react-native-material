import {
  ShapeCategory,
  ShapeCornerRadius,
  ShapeFamily,
  ShapeScheme,
} from "../shape-scheme";

export type ShapeCornerRadiusOptions = number | Partial<ShapeCornerRadius>;

export interface ShapeValuesOptions {
  family?: ShapeFamily | undefined;
  cornerRadius?: ShapeCornerRadiusOptions | undefined;
}

export type ShapeSchemeOptions = Partial<
  Record<ShapeCategory, ShapeValuesOptions>
>;

const getCorner = (
  options: ShapeCornerRadiusOptions | undefined,
  corner: keyof ShapeCornerRadius
): number | undefined => {
  if (options === undefined) return undefined;
  return typeof options === "number" ? options : options[corner];
};

export const createCornerRadius = (
  options: ShapeCornerRadiusOptions | undefined,
  defaultValue: number | ShapeCornerRadius
): ShapeCornerRadius => {
  return {
    topStart:
      getCorner(options, "topStart") ??
      (typeof defaultValue === "number" ? defaultValue : defaultValue.topStart),
    topEnd:
      getCorner(options, "topEnd") ??
      (typeof defaultValue === "number" ? defaultValue : defaultValue.topEnd),
    bottomStart:
      getCorner(options, "bottomStart") ??
      (typeof defaultValue === "number"
        ? defaultValue
        : defaultValue.bottomStart),
    bottomEnd:
      getCorner(options, "bottomEnd") ??
      (typeof defaultValue === "number"
        ? defaultValue
        : defaultValue.bottomEnd),
  };
};

export const createShapeScheme = (
  options?: ShapeSchemeOptions | undefined
): ShapeScheme => {
  return {
    small: {
      family: options?.small?.family ?? "rounded",
      cornerRadius: createCornerRadius(options?.small?.cornerRadius, 4),
    },
    medium: {
      family: options?.medium?.family ?? "rounded",
      cornerRadius: createCornerRadius(options?.medium?.cornerRadius, 4),
    },
    large: {
      family: options?.large?.family ?? "rounded",
      cornerRadius: createCornerRadius(options?.large?.cornerRadius, 0),
    },
  };
};
