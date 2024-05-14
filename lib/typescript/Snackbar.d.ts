import React from 'react';
import { SurfaceProps } from './Surface';
export interface SnackbarProps extends SurfaceProps {
    message: string;
    action?: React.ReactElement;
}
declare const Snackbar: React.FC<SnackbarProps>;
export default Snackbar;
