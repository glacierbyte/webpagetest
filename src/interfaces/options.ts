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
    private?: 0 | 1;
    connections?: number;
    web10?: 0| 1;
    notify?: string;
    pingback?: string;
    bwDown?: number;
    bwUp?: number;
    latency?: number;
    plr?: number;
    tcpdump?: 0 | 1;
    noopt?: 0 | 1;
    noimages?: 0 | 1;
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