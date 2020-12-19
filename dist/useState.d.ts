import { Dispatch, SetStateAction } from "react";
declare function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
declare function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export default useState;
