import React from 'react';
import type { SurfaceProps } from './Surface';
import { PressableProps } from './Pressable';
export interface ListItemProps extends Omit<SurfaceProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
    title?: string;
    secondaryText?: string;
    overline?: string;
    divider?: Boolean;
    meta?: string;
    leadingMode?: 'icon' | 'avatar' | 'image';
    leading?: React.ReactElement;
    trailing?: React.ReactElement | ((props: {
        color: string;
        size: number;
    }) => React.ReactElement | null) | null;
}
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
