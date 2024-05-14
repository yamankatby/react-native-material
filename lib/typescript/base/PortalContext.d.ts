import React, { Dispatch, SetStateAction } from 'react';
export declare const PortalContext: React.Context<{
    portals: PortalProps[];
    setPortals: Dispatch<SetStateAction<PortalProps[]>>;
} | null>;
export declare const usePortalContext: () => {
    portals: PortalProps[];
    setPortals: Dispatch<SetStateAction<PortalProps[]>>;
};
export declare const PortalProvider: React.FC;
export declare const Outlet: React.FC;
export interface PortalProps {
    key?: React.Key;
    children?: React.ReactNode;
}
export declare const Portal: React.FC<PortalProps>;
