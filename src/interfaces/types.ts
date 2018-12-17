export interface BasicResponse {
    statusCode: number;
    statusTest: string;
}

export interface RunTestResponse extends BasicResponse {
    data: {
        testId: string,
        ownerKey: string,
        jsonUrl: string,
        userUrl: string
    }
}
export interface TestStatusResponse extends BasicResponse {
    requestId: string;
    runs: number;
}
export interface LocationResponse extends BasicResponse {
    data: object;
}

export interface ViewBenchmarkResults {
    minify_total: number;
    responses_200: number;
    testStartOffset: number;
    bytesOut: number;
    gzip_savings: number;
    requestsFull: number;
    start_epoch: number;
    'cpu.MarkLoad': number;
    connections: number;
    'cpu.EventDispatch': number;
    bytesOutDoc: number;
    result: number;
    score_cookies: number;
    basePageSSLTime: number;
    docTime: number;
    domContentLoadedEventEnd: number;
    image_savings: number;
    'cpu.ParseHTML': number;
    requestsDoc: number;
    'cpu.v8.compile': number;
    'cpu.CommitLoad': number;
    firstMeaningfulPaint: number;
    'cpu.FunctionCall': number;
    firstTextPaint: number;
    firstPaint: number;
    'cpu.ParseAuthorStyleSheet': number;
    score_cdn: number;
    'cpu.Idle': number;
    optimization_checked: number;
    image_total: number;
    score_minify: number;
    gzip_total: number;
    'cpu.ResourceChangePriority': number;
    responses_404: number;
    'cpu.Layout': number;
    loadTime: number;
    score_combine: number;
    firstContentfulPaint: number;
    'cpu.PlatformResourceSendRequest': number;
    firstLayout: number;
    score_etags: number;
    loadEventStart: number;
    'cpu.EvaluateScript': number;
    'cpu.BlinkGC.AtomicPhas': number;
    minify_savings: number;
    score_progressive_jpeg: number;
    domInteractive: number;
    score_gzip: number;
    'cpu.Paint': number;
    score_compress: number;
    domContentLoadedEventStart: number;
    'cpu.MarkDOMContent': number;
    'cpu.MinorGC': number;
    bytesInDoc: number;
    firstImagePaint: number;
    'score_keep-alive': number;
    loadEventEnd: number;
    cached: number;
    score_cache: number;
    responses_other: number;
    'cpu.UpdateLayerTree': number;
    fullyLoaded: number;
    requests: number;
    final_base_page_request: number;
    TTFB: number;
    'cpu.UpdateLayoutTree': number;
    bytesIn: number;
    test_run_time_ms: number;
    'PerformancePaintTiming.first-contentful-paint': number;
    visualTest: number;
    date: number;
    'PerformancePaintTiming.first-paint': number;
    domElements: number;
    domComplete: number;
    'userTime.Zone': number;
    'userTime.Zone_ZoneAwarePromise': number;
    'userTime.Zone_toString': number;
    'userTime.Zone_util': number;
    'userTime.Zone_timers': number;
    'userTime.Zone_requestAnimationFrame': number;
    'userTime.Zone_blocking': number;
    'userTime.Zone_EventTarget': number;
    'userTime.Zone_on_property': number;
    'userTime.Zone_canvas': number;
    'userTime.Zone_XHR': number;
    'userTime.Zone_geolocation': number;
    'userTime.Zone_PromiseRejectionEvent': number;
    'userTimingMeasure.Zone': number;
    'userTimingMeasure.Zone_ZoneAwarePromise': number;
    'userTimingMeasure.Zone_toString': number;
    'userTimingMeasure.Zone_util': number;
    'userTimingMeasure.Zone_timers': number;
    'userTimingMeasure.Zone_requestAnimationFrame': number;
    'userTimingMeasure.Zone_blocking': number;
    'userTimingMeasure.Zone_EventTarget': number;
    'userTimingMeasure.Zone_on_property': number;
    'userTimingMeasure.Zone_canvas': number;
    'userTimingMeasure.Zone_XHR': number;
    'userTimingMeasure.Zone_geolocation': number;
    'userTimingMeasure.Zone_PromiseRejectionEvent': number;
    userTime: number;
    Colordepth: number;
    lastVisualChange: number;
    visualComplete: number;
    render: number;
    SpeedIndex: number;
    visualComplete85: number;
    visualComplete90: number;
    visualComplete95: number;
    visualComplete99: number;
    'chromeUserTiming.fetchStart': number;
    'chromeUserTiming.responseEnd': number;
    'chromeUserTiming.unloadEventStart': number;
    'chromeUserTiming.unloadEventEnd': number;
    'chromeUserTiming.domLoading': number;
    'chromeUserTiming.firstLayout': number;
    'chromeUserTiming.firstPaint': number;
    'chromeUserTiming.firstContentfulPaint': number;
    'chromeUserTiming.firstImagePaint': number;
    'chromeUserTiming.firstMeaningfulPaint': number;
    'chromeUserTiming.firstMeaningfulPaintCandidate': number;
    'chromeUserTiming.firstTextPaint': number;
    'chromeUserTiming.domInteractive': number;
    'chromeUserTiming.domContentLoadedEventStart': number;
    'chromeUserTiming.domContentLoadedEventEnd': number;
    'chromeUserTiming.domComplete': number;
    'chromeUserTiming.loadEventStart': number;
    'chromeUserTiming.loadEventEnd': number;
    TTIMeasurementEnd: number;
    LastInteractive: number;
    run: number;
    step: number;
    effectiveBps: number;
    effectiveBpsDoc: number;
    domTime: number;
    aft: number;
    titleTime: number;
    domLoading: number;
    server_rtt: number;
    smallImageCount: number;
    bigImageCount: number;
    maybeCaptcha: number;
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
export interface Run {
    id: number,
    firstView: ResultViewResult,
    repeatView: ResultViewResult
}
export interface Statistics {
    firstView: ViewBenchmarkResults,
    repeatView: ViewBenchmarkResults
}
export interface TestResult {
    id: string;
    url: string;
    summary: string;
    testUrl: string;
    location: string;
    from: string;
    connectivity: string;
    bwDown: number;
    bwUp: number;
    latency: number;
    plr: string;
    mobile: number;
    completed: number;
    runs: {
        [run: number]: Run
    };
    fvonly: boolean,
    successfulFVRuns: number,
    successfulRVRuns: number,
    average: Statistics,
    standardDeviation: Statistics,
    median: Statistics
}
export interface TestResultResponse extends BasicResponse {
    data: TestResult
    webPagetestVersion: string
}
export enum DEBUG_LEVEL {
    NONE,
    INFO,
    ALL
}