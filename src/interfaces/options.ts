import {DEBUG_LEVEL} from "./types";

export interface RunTestOptions {
    debug?: DEBUG_LEVEL,
    label?: string;
    location?: string;
    runs?: number;
    fvonly?: number;
}
export interface TestStatusOptions {
    test: string,
    f: string
}
export interface TestResultOptions {
    test: string,
    f: string
}
export interface TestOptions {
    apiKey: string;
    endpoint?: string;
    timeout?: number;
    debug?: DEBUG_LEVEL;
}
export interface TestCancelOptions {
    test: string,
    k: string;
}