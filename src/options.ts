interface RunTestOptions {
    url: string;
    label?: string;
    k?: string;
    location?: string;
    runs?: number;
    fvonly?: number;
    f: string;
}
interface TestStatusOptions {
    test: string,
    f: string
}
interface TestResultOptions {
    test: string,
    f: string
}
interface TestOptions {
    apiKey: string;
    endpoint?: string;
    timeout?: number;
}