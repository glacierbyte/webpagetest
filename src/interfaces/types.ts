export interface RunTestResponse {
    statusCode: number,
    statusTest: string,
    data: {
        testId: string,
        ownerKey: string,
        jsonUrl: string,
        userUrl: string
    }
}
export interface TestStatusResponse {
    statusCode: number;
    statusText: string;
    requestId: string;
    runs: number
}
interface ViewBenchmarkResults {
    loadTimes: number;
    TTFB: number;
    bytesIn: number;
    bytesInDoc: number;
    requests: number;
    requestsDoc: number;
    render: number;
    fullyLoaded: number;
    docTime: number;
    domTime: number;
    avgRun: number;
}
export interface ResultViewResult {
    result: {
        URL: string,
    },
    pages: {
        details: string,
        checklist: string,
        report: string,
        breakdown: string,
        domains: string,
        screenShot: string
    }

}
interface Run {
    id: number,
    firstView: ResultViewResult
}
export interface TestResult {
    url?: string,
    testId?: string,
    average: {
        firstView: ViewBenchmarkResults,
        repeatView: ViewBenchmarkResults
    },
    runs: Run[]
}
export interface TestResultResponse {
    data: TestResult
}
export enum DEBUG_LEVEL {
    NONE,
    INFO,
    ALL
}