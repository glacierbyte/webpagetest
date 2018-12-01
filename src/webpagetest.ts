import axios, {AxiosInstance} from 'axios';
import * as querystring from "querystring";

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
    constructor(options: TestOptions) {
        this.apiKey = options.apiKey;
        this.httpClient = axios.create({
            baseURL: (options && options.endpoint) || this.webPageTestEndPoint,
            timeout: (options && options.timeout) || this.webPageTestTimeout,
        });
    }
    async runTest(url: string): Promise<RunTestResponse> {
        const options: RunTestOptions = {
            url: url,
            k: this.apiKey,
            f: 'json'
        };
        const data = await this.httpClient.post<RunTestResponse>(this.webPageTestPaths.runTest, querystring.stringify(options));
        return data.data;
    }
    async testStatus(testId: string): Promise<TestStatusResponse> {
        const options: TestStatusOptions = {
            test: testId,
            f: 'json',
        };
        const data = await this.httpClient.post<TestStatusResponse>(this.webPageTestPaths.testStatus, querystring.stringify(options));
        return data.data;
    }
    async testResult(testId: string): Promise<TestResultReponse> {
        const options: TestResultOptions = {
            test: testId,
            f: 'json',
        };
        const data = await this.httpClient.post<TestResultReponse>(this.webPageTestPaths.testResult, querystring.stringify(options));
        return data.data;
    }
}
module.exports = {
    WebPageTest: WebPageTest
};