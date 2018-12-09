import {DEBUG_LEVEL} from "./types";

export interface BasicFileOption {
    f: string
}

interface BasicTestOption {
    test: string,
}

export interface RunTestOptions {
    debug?: DEBUG_LEVEL,
    label?: string;
    location?: string;
    runs?: number;
    fvonly?: number;
}

export interface TestStatusOptions extends BasicTestOption, BasicFileOption {

}

export interface TestResultOptions extends BasicTestOption, BasicFileOption {

}

export interface TestOptions {
    apiKey: string;
    endpoint?: string;
    timeout?: number;
    debug?: DEBUG_LEVEL;
}

export interface TestCancelOptions extends BasicTestOption {
    k: string;
}