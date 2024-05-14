type InitialState = boolean | (() => boolean);
/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export declare const useBoolean: (initialState?: InitialState) => readonly [boolean, {
    readonly on: () => void;
    readonly off: () => void;
    readonly toggle: () => void;
}];
export {};
