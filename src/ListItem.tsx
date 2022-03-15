import React from 'react';
import { View } from 'react-native';
import Divider from './Divider';
import Text from './Text';
import type { SurfaceProps } from './Surface';
import Pressable, { PressableProps } from './Pressable';
import { useSurfaceScale } from './hooks/use-surface-scale';

export interface ListItemProps extends Omit<SurfaceProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
  title?: string;

  secondaryText?: string;

  overline?: string;

  meta?: string;

  leadingMode?: 'icon' | 'avatar' | 'image';

  leading?: React.ReactElement;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  secondaryText,
  overline,
  meta,
  leadingMode = 'icon',
  leading,
  trailing,

  pressEffect,
  pressEffectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
}) => {
  const scale = useSurfaceScale();

  return (
    <Pressable
      style={{ backgroundColor: scale(0).hex() }}
      pressEffect={pressEffect}
      pressEffectColor={pressEffectColor}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      delayLongPress={delayLongPress}
      disabled={disabled}
      hitSlop={hitSlop}
      pressRetentionOffset={pressRetentionOffset}
      android_disableSound={android_disableSound}
      android_ripple={android_ripple}
      testOnly_pressed={testOnly_pressed}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
        {leading && (
          <View
            style={{
              width: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 100,
              height: leadingMode === 'icon' ? 24 : leadingMode === 'avatar' ? 56 : 56,
              justifyContent: 'center',
              alignItems: 'center',
              marginStart: leadingMode === 'image' ? 0 : 16,
            }}
          >
            {leading}
          </View>
        )}
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          {overline && (
            <Text selectable={false} variant="overline" style={{ marginBottom: 2, color: scale(0.6).hex() }}>
              {overline}
            </Text>
          )}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {title && (
              <Text selectable={false} variant="subtitle1" style={{ color: scale(0.87).hex() }}>
                {title}
              </Text>
            )}
            {meta && (
              <Text selectable={false} variant="caption" style={{ color: scale(0.87).hex() }}>
                {meta}
              </Text>
            )}
          </View>
          {secondaryText && (
            <Text selectable={false} variant="body2" style={{ marginTop: 4, color: scale(0.6).hex() }}>
              {secondaryText}
            </Text>
          )}
        </View>
        {trailing && (
          <View
            style={{
              width: 24,
              height: 24,
              marginEnd: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {typeof trailing === 'function' ? trailing({ color: scale(0.87).hex(), size: 24 }) : trailing}
          </View>
        )}
      </View>
      <Divider leadingInset={leading ? (leadingMode === 'icon' ? 56 : leadingMode === 'avatar' ? 88 : 116) : 16} />
    </Pressable>
  );
};

export default ListItem;
