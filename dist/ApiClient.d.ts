export class RavenApiClient {
    static CollectionFormatEnum: {
        CSV: string;
        SSV: string;
        TSV: string;
        PIPES: string;
        MULTI: string;
    };
    static parseDate(str: any): Date;
    static convertToType(data: any, type: any): any;
    static constructFromObject(data: any, obj: any, itemType: any): void;
    constructor(options: any);
    basePath: any;
    defaultHeaders: {};
    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    timeout: number;
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    cache: boolean;
    enableCookies: boolean;
    agent: any;
    requestAgent: any;
    paramToString(param: any): any;
    buildUrl(path: any, pathParams: any): any;
    isJsonMime(contentType: any): boolean;
    jsonPreferredMime(contentTypes: any): any;
    isFileParam(param: any): boolean;
    normalizeParams(params: any): {};
    buildCollectionParam(param: any, collectionFormat: any): any;
    applyAuthToRequest(request: any, authNames: any): void;
    deserialize(response: any, returnType: any): any;
    callApi(path: any, httpMethod: any, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: any, authNames: any, contentTypes: any, accepts: any, returnType: any): Promise<any>;
    #private;
}
export namespace RavenApiClient {
    const instance: RavenApiClient;
}
//# sourceMappingURL=ApiClient.d.ts.map