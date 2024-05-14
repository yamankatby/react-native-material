import React from 'react';
export interface DialogHeaderProps {
    title: string | React.ReactNode | ((props: {
        color: string;
    }) => React.ReactNode | null) | null;
}
declare const DialogHeader: React.FC<DialogHeaderProps>;
export default DialogHeader;
