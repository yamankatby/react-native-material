export type ShapeCategory = "small" | "medium" | "large";

export type ShapeFamily = "rounded" | "cut";

export interface ShapeRadius {
  borderTopStartRadius: number;
  borderTopEndRadius: number;
  borderBottomStartRadius: number;
  borderBottomEndRadius: number;
}

export interface ShapeConfig {
  family: ShapeFamily;
  radius: ShapeRadius;
}

export type ShapeSchema = Record<ShapeCategory, ShapeConfig>;

export interface ShapeRadiusOptions extends Partial<ShapeRadius> {
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}

export interface ShapeConfigOptions {
  family?: ShapeFamily;
  radius?: ShapeRadiusOptions;
}

export type ShapeOptions = Partial<Record<ShapeCategory, ShapeConfigOptions>>;

export const getFirstValue = (
  obj: any | undefined,
  keys: string[]
): number | undefined => {
  if (!obj) return undefined;
  const v = Object.entries(obj)
    .reverse()
    .find((x) => keys.includes(x[0]));
  return v && (v[1] as number);
};

export const getShapeRadius = (
  obj: any | undefined,
  defaultValue: ShapeRadius
): ShapeRadius => {
  return {
    borderTopStartRadius:
      getFirstValue(obj, [
        "borderRadius",
        "borderTopStartRadius",
        "borderTopLeftRadius",
      ]) ?? defaultValue.borderTopStartRadius,
    borderTopEndRadius:
      getFirstValue(obj, [
        "borderRadius",
        "borderTopEndRadius",
        "borderTopRightRadius",
      ]) ?? defaultValue.borderTopEndRadius,
    borderBottomStartRadius:
      getFirstValue(obj, [
        "borderRadius",
        "borderBottomStartRadius",
        "borderBottomLeftRadius",
      ]) ?? defaultValue.borderBottomStartRadius,
    borderBottomEndRadius:
      getFirstValue(obj, [
        "borderRadius",
        "borderBottomEndRadius",
        "borderBottomRightRadius",
      ]) ?? defaultValue.borderBottomEndRadius,
  };
};

export const createShapeSchema = (options?: ShapeOptions): ShapeSchema => {
  return {
    small: {
      family: options?.small?.family ?? "rounded",
      radius: getShapeRadius(options?.small?.radius, {
        borderTopStartRadius: 4,
        borderTopEndRadius: 4,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
      }),
    },
    medium: {
      family: options?.small?.family ?? "rounded",
      radius: getShapeRadius(options?.small?.radius, {
        borderTopStartRadius: 4,
        borderTopEndRadius: 4,
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
      }),
    },
    large: {
      family: options?.small?.family ?? "rounded",
      radius: getShapeRadius(options?.small?.radius, {
        borderTopStartRadius: 0,
        borderTopEndRadius: 0,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
      }),
    },
  };
};
