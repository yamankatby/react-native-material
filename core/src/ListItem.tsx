import React, { useMemo } from "react";
import { View } from "react-native";
import chroma from "chroma-js";
import { useTheme } from "./base";
import Divider from "./Divider";
import Text from "./Text";
import { SurfaceProps } from "./Surface";
import Pressable from "./Pressable";

export interface ListItemProps extends SurfaceProps {
  title?: string;

  secondaryText?: string;

  overline?: string;

  meta?: string;

  leadingMode?: "icon" | "avatar" | "image";

  leading?: React.ReactElement;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  secondaryText,
  overline,
  meta,
  leadingMode = "icon",
  leading,
  trailing,
  style,
  ...rest
}) => {
  const { palette } = useTheme();
  const scale = useMemo(
    () => chroma.scale([palette.surface, palette.onSurface]),
    [palette.surface, palette.onSurface],
  )
  return (
    <Pressable style={{ backgroundColor: scale(0).hex() }} {...rest}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 12 }}>
        {leading &&
        <View
          style={{
            width: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 100,
            height: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 56,
            justifyContent: 'center',
            alignItems: 'center',
            marginStart: leadingMode === 'image' ? 0 : 16,
          }}
        >{leading}</View>}
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          {overline &&
          <Text selectable={false} variant="overline" style={{ marginBottom: 2, color: scale(0.6).hex() }}>{overline}</Text>}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {title &&
            <Text selectable={false} variant="subtitle1" style={{ color: scale(0.87).hex() }}>{title}</Text>}
            {meta &&
            <Text selectable={false} variant="caption" style={{ color: scale(0.87).hex() }}>{meta}</Text>}
          </View>
          {secondaryText &&
          <Text selectable={false} variant="body2" style={{ marginTop: 4, color: scale(0.6).hex() }}>{secondaryText}</Text>}
        </View>
        {trailing &&
        <View style={{
          width: 24,
          height: 24,
          marginEnd: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {typeof trailing === "function" ? trailing({ color: scale(0.87).hex(), size: 24 }) : trailing}
        </View>}
      </View>
      <Divider leadingInset={leading ? (leadingMode === 'icon' ? 56 : leadingMode === 'avatar' ? 88 : 116) : 16} />
    </Pressable>
  )
};

export default ListItem;
