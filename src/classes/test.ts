import {WebPageTest} from "./webpagetest";
import {DEBUG_LEVEL, TestResult} from "../interfaces/types";
import {RunTestOptions} from "../interfaces/options";

interface TestOptions {
    pingDelay?: number;
    runTimeOptions: RunTestOptions;
    debug: DEBUG_LEVEL;
}
const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

export class NewTest {
    private readonly Url: string;
    private TestId?: string;
    private TestEngine: WebPageTest;
    private readonly TestOptions?: TestOptions;
    private TestUrl?: string;
    constructor(testEngine: WebPageTest, url: string, options?: TestOptions) {
        this.Url = url;
        this.TestEngine = testEngine;
        this.TestOptions = options;
    }

    public async StartTest(): Promise<boolean> {
        let response = await this.TestEngine.runTest(this.Url, (this.TestOptions && this.TestOptions.runTimeOptions));
        if(response.statusCode === 200) {
            this.TestId = response.data.testId;
            this.TestUrl = response.data.userUrl;
            if(this.TestOptions && this.TestOptions.debug === DEBUG_LEVEL.ALL) {
                console.log(response.data);
            }
            return true;
        } else {
            throw new Error(`Starting test returned status code of ${response.statusCode}`);
        }
    }
    public async WaitForTestCompleted(): Promise<boolean> {
        if(this.TestId) {
            while (true) {
                let response = await this.TestEngine.testStatus(this.TestId);
                switch (response.statusCode) {
                    case 200:
                        return true;
                    case 404:
                        throw new Error("Server not found");
                    case 500:
                        throw new Error("Server Error");
                    default:
                        await wait((this.TestOptions && this.TestOptions.pingDelay || 1) * 1000);
                }
            }
        } else {
            throw new Error("Test has not been run yet");
        }
    }
    public async GetResult(): Promise<TestResult> {
        if(this.TestId) {
            let response = await this.TestEngine.testResult(this.TestId);
            if (response) {
                return response;
            }
            throw new Error('Was not able to get Test Data');
        } else {
            throw new Error("Test has not been run yet");
        }
    }

    public async CancelTest(): Promise<boolean> {
        if(this.TestId) {
            return await this.TestEngine.cancelTest(this.TestId);
        } else {
            throw new Error("Test has not been run yet");
        }
    }

    public async ExecuteTest(): Promise<TestResult> {
        await this.StartTest();
        await this.WaitForTestCompleted();
        return await this.GetResult();
    }
}