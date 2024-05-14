import React, { ReactNode } from 'react';
import { SurfaceProps } from './Surface';
export interface DialogProps {
    visible?: boolean;
    onDismiss?: () => void;
    surfaceStyles?: SurfaceProps;
    children: ReactNode;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
