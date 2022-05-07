import superagent from "superagent";

interface RavenApiClientConfiguration {
  basePath: string;
  defaultHeaders: {};
  timeout: number;
  cache: boolean;
  enableCookies: boolean;
  agent: superagent.agent;
}

interface RavenApiClientSchema {
  CollectionFormatEnum: {
    CSV: string;
    SSV: string;
    TSV: string;
    PIPES: string;
    MULTI: string;
  };
  parseDate: (str: string) => Date;
  convertToType: (data: object, type: string) => object;
  constructFromObject: (data: object, obj: object, itemType: any) => void;
  paramToString: (param: any) => any;
  buildUrl: (path: string, pathParams: object) => any;
  isJsonMime: (contentType: object) => boolean;
  jsonPreferredMime: (contentTypes: string) => string;
  isFileParam: (param: object) => boolean;
  normalizeParams: (params: object) => {};
  buildCollectionParam: (param: any, collectionFormat: any) => any;
  applyAuthToRequest: (request: any, authNames: any) => void;
  deserialize: (response: any, returnType: any) => any;
  callApi: (
    path: any,
    httpMethod: any,
    pathParams: any,
    queryParams: any,
    headerParams: any,
    formParams: any,
    bodyParam: any,
    authNames: any,
    contentTypes: any,
    accepts: any,
    returnType: any
  ) => Promise<any>;
}

export interface RavenApiClientOptions {
  baseUrl?: string;
  apiKey?: string;
}

export function RavenApiClient(
  options: RavenApiClientOptions
): RavenApiClientSchema;

export class User {
  static constructFromObject(data: any, obj: any): any;
  getUserId(): any;
  setUserId(userId: any): void;
  userId: any;
  getMobile(): any;
  setMobile(mobile: any): void;
  mobile: any;
  getEmail(): any;
  setEmail(email: any): void;
  email: any;
  getWhatsappMobile(): any;
  setWhatsappMobile(whatsappMobile: any): void;
  whatsappMobile: any;
  getOnesignalExternalId(): any;
  setOnesignalExternalId(onesignalExternalId: any): void;
  onesignalExternalId: any;
  getFcmTokens(): any;
  setFcmTokens(fcmTokens: any): void;
  fcmTokens: any;
  getIosTokens(): any;
  setIosTokens(iosTokens: any): void;
  iosTokens: any;
  getFcmTopic(): any;
  setFcmTopic(fcmTopic: any): void;
  fcmTopic: any;
  getFcmDeviceGroup(): any;
  setFcmDeviceGroup(fcmDeviceGroup: any): void;
  fcmDeviceGroup: any;
  getSlack(): any;
  setSlack(slack: any): void;
  slack: any;
  getOnesignalPlayerIds(): any;
  setOnesignalPlayerIds(onesignalPlayerIds: any): void;
  onesignalPlayerIds: any;
}
export class EventOverride {
  static constructFromObject(data: any, obj: any): any;
  getEmail(): any;
  setEmail(email: any): void;
  email: any;
  getSms(): any;
  setSms(sms: any): void;
  sms: any;
  getWhatsapp(): any;
  setWhatsapp(whatsapp: any): void;
  whatsapp: any;
  getPush(): any;
  setPush(push: any): void;
  push: any;
  getWebhook(): any;
  setWebhook(webhook: any): void;
  webhook: any;
  getVoice(): any;
  setVoice(voice: any): void;
  voice: any;
  getSlack(): any;
  setSlack(slack: any): void;
  slack: any;
  getProviders(): any;
  setProviders(providers: any): void;
  providers: any;
}

interface BulkEventSchema {
  user: User;
  data?: Object;
  override?: EventOverride;
}
export class SendEventBulk {
  static constructFromObject(data: Object, obj: SendEventBulk): SendEventBulk;
  constructor(event: string, batch: Array<BulkEventSchema>);
  event: string;
  batch: Array<BulkEventSchema>;
  getEvent(): string;
  setEvent(event: string): void;
  getBatch(): Array<BulkEventSchema>;
  setBatch(batch: Array<BulkEventSchema>): void;
}

export class EventApi {
  constructor(apiClient: RavenApiClientSchema);
  apiClient: RavenApiClientSchema;
  sendBulkEventWithHttpInfo(appId: string, event: SendEventBulk): any;
  sendBulkEvent(appId: any, event: any): any;
  sendEventWithHttpInfo(appId: any, event: any, opts: any): any;
  sendEvent(appId: any, event: any, opts: any): any;
}
