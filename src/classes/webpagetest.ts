import axios, {AxiosInstance} from 'axios';
import * as querystring from "querystring";
import {
    DEBUG_LEVEL,
    LocationResponse,
    RunTestResponse,
    TestResult,
    TestResultResponse,
    TestStatusResponse
} from "@interfaces/types";
import {
    BasicFileOption,
    RunTestOptions,
    TestCancelOptions,
    TestOptions,
    TestResultOptions,
    TestStatusOptions
} from "@interfaces/options";

interface FullRunTestOptions extends RunTestOptions{
    url: string,
    k: string,
    f: string
}

export class WebPageTest {
    private webPageTestEndPoint: string = 'https://www.webpagetest.org';
    private webPageTestTimeout: number = 1000;
    private webPageTestPaths = {
        'runTest': '/runtest.php',
        'testStatus': '/testStatus.php',
        'testResult': '/jsonResult.php',
        'cancelTest': '/cancelTest.php',
    };
    readonly apiKey: string;
    private httpClient: AxiosInstance;
    readonly debugLevel: DEBUG_LEVEL;

    constructor(options: TestOptions) {
        this.apiKey = options.apiKey;
        this.debugLevel = options.debug || DEBUG_LEVEL.NONE;
        if(this.debugLevel === DEBUG_LEVEL.ALL) {
            console.log(options);
        }
        this.httpClient = axios.create({
            baseURL: (options && options.endpoint) || this.webPageTestEndPoint,
            timeout: (options && options.timeout) || this.webPageTestTimeout,
        });
    }

    async runTest(url: string, runOptions?: RunTestOptions): Promise<RunTestResponse> {

        const testOptions = (runOptions || {}) as FullRunTestOptions;
        testOptions.f = 'json';
        testOptions.k = this.apiKey;
        testOptions.url = url;
        if(this.debugLevel === DEBUG_LEVEL.ALL){
            console.log(querystring.stringify(testOptions));
        }
        const data = await this.httpClient.post<RunTestResponse>(this.webPageTestPaths.runTest, querystring.stringify(testOptions));
        return data.data;
    }

    async testStatus(testId: string): Promise<TestStatusResponse> {
        const options: TestStatusOptions = {
            test: testId,
            f: 'json',
        };
        if(this.debugLevel === DEBUG_LEVEL.ALL){
            console.log(querystring.stringify(options));
        }
        const data = await this.httpClient.post<TestStatusResponse>(this.webPageTestPaths.testStatus, querystring.stringify(options));
        return data.data;
    }

    async cancelTest(testId: string): Promise<boolean> {
        const options: TestCancelOptions = {
            test: testId,
            k: this.apiKey,
        };
        if(this.debugLevel === DEBUG_LEVEL.ALL){
            console.log(querystring.stringify(options));
        }
        const data = await this.httpClient.post<TestStatusResponse>(this.webPageTestPaths.cancelTest, querystring.stringify(options));
        return data.status === 200;
    }

    async testResult(testId: string): Promise<TestResult> {
        const options: TestResultOptions = {
            test: testId,
            f: 'json',
        };
        if(this.debugLevel === DEBUG_LEVEL.ALL){
            console.log(querystring.stringify(options));
        }
        const data = await this.httpClient.post<TestResultResponse>(this.webPageTestPaths.testResult, querystring.stringify(options));
        if(data.status === 200) {
            return data.data.data;
        } else {
            throw new Error('Test Failed');
        }
    }

    async getLocations(): Promise<LocationResponse> {
        const options: BasicFileOption = {
            f: 'json',
        };
        if(this.debugLevel === DEBUG_LEVEL.ALL){
            querystring.stringify(options);
        }
        const data = await this.httpClient.post<LocationResponse>(this.webPageTestPaths.testResult, querystring.stringify(options));
        if(data.status === 200) {
            return data.data;
        } else {
            throw new Error('Test Failed');
        }
    }
}