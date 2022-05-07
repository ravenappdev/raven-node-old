import superagent from "superagent";

interface RavenApiClientConfiguration {
  basePath: string;
  defaultHeaders: {};
  timeout: number;
  cache: boolean;
  enableCookies: boolean;
  agent: superagent.agent;
}

export interface RavenApiClientOptions {
  baseUrl?: string;
  apiKey?: string;
}

export class RavenApiClient {
  constructor(options: RavenApiClientOptions);
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

export class User {
  static constructFromObject(data: object, obj: object): any;
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

export class EmailOverride {
  static constructFromObject(data: object, obj: object): EmailOverride;
  getFrom(): EmailRecipient;
  setFrom(from: EmailRecipient): void;
  from: EmailRecipient;
  getCc(): EmailRecipient;
  setCc(cc: EmailRecipient): void;
  cc: EmailRecipient;
  getBcc(): EmailRecipient;
  setBcc(bcc: EmailRecipient): void;
  bcc: EmailRecipient;
  getAttachments(): Attachments;
  setAttachments(attachments: Attachments): void;
  attachments: Attachments;
  getScheduledAt(): string;
  setScheduledAt(scheduledAt: string): void;
  scheduledAt: string;
}

export class ProviderOverride {
  static constructFromObject(data: object, obj: object): ProviderOverride;
  getPayload(): object;
  setPayload(payload: object): void;
  payload: object;
  getFormParams(): Array<Param>;
  setFormParams(formParams: Array<Param>): void;
  formParams: Array<Param>;
  getQueryParams(): Array<Param>;
  setQueryParams(queryParams: Array<Param>): void;
  queryParams: Array<Param>;
  getConfig(): object;
  setConfig(config: object): void;
  config: object;
}

export class PushOverride {
  static constructFromObject(data: object, obj: object): PushOverride;
  getScheduledAt(): string;
  setScheduledAt(scheduledAt: string): void;
  scheduledAt: string;
}

export class SlackOverride {
  static constructFromObject(data: object, obj: object): SlackOverride;
  getScheduledAt(): string;
  setScheduledAt(scheduledAt: string): void;
  scheduledAt: string;
}

export class SmsOverride {
  static constructFromObject(data: object, obj: object): SmsOverride;
  getSender(): any;
  setSender(sender: any): void;
  sender: any;
  getScheduledAt(): any;
  setScheduledAt(scheduledAt: any): void;
  scheduledAt: any;
}

export class VoiceOverride {
  static constructFromObject(data: object, obj: object): VoiceOverride;
  getScheduledAt(): any;
  setScheduledAt(scheduledAt: any): void;
  scheduledAt: any;
}

export class WebhookOverride {
  static constructFromObject(data: object, obj: object): WebhookOverride;
  getScheduledAt(): any;
  setScheduledAt(scheduledAt: any): void;
  scheduledAt: any;
}

export class WhatsappOverride {
  static constructFromObject(data: object, obj: object): WhatsappOverride;
  getScheduledAt(): any;
  setScheduledAt(scheduledAt: any): void;
  scheduledAt: any;
}

export class Attachments {
  static constructFromObject(data: object, obj: object): Attachments;
  getFilename(): string;
  setFilename(filename: string): void;
  filename: string;
  getContent(): string;
  setContent(content: string): void;
  content: string;
  getUrl(): string;
  setUrl(url: string): void;
  url: string;
}

export class EmailRecipient {
  static constructFromObject(data: object, obj: object): EmailRecipient;
  getName(): string;
  setName(name: string): void;
  name: string;
  getAddress(): string;
  setAddress(address: string): void;
  address: string;
}

export class Param {
  static constructFromObject(data: object, obj: object): Param;
  getName(): string;
  setName(name: string): void;
  name: string;
  getValue(): string;
  setValue(value: string): void;
  value: string;
}

export class Response {
  static constructFromObject(data: object, obj: object): Response;
  getSuccess(): boolean;
  setSuccess(success: boolean): void;
  success: boolean;
  getId(): string;
  setId(id: string): void;
  id: string;
  getError(): string;
  setError(error: string): void;
  error: string;
}

export class EventOverride {
  static constructFromObject(data: object, obj: object): EventOverride;
  getEmail(): EmailOverride;
  setEmail(email: EmailOverride): void;
  email: EmailOverride;
  getSms(): SmsOverride;
  setSms(sms: SmsOverride): void;
  sms: SmsOverride;
  getWhatsapp(): WhatsappOverride;
  setWhatsapp(whatsapp: WhatsappOverride): void;
  whatsapp: WhatsappOverride;
  getPush(): PushOverride;
  setPush(push: PushOverride): void;
  push: PushOverride;
  getWebhook(): WebhookOverride;
  setWebhook(webhook: WebhookOverride): void;
  webhook: WebhookOverride;
  getVoice(): VoiceOverride;
  setVoice(voice: VoiceOverride): void;
  voice: VoiceOverride;
  getSlack(): SlackOverride;
  setSlack(slack: SlackOverride): void;
  slack: SlackOverride;
  getProviders(): ProviderOverride;
  setProviders(providers: ProviderOverride): void;
  providers: ProviderOverride;
}

interface BulkEventSchema {
  user: User;
  data?: object;
  override?: EventOverride;
}

export class SendEventBulk {
  static constructFromObject(data: object, obj: SendEventBulk): SendEventBulk;
  constructor(event: string, batch: Array<BulkEventSchema>);
  event: string;
  batch: Array<BulkEventSchema>;
  getEvent(): string;
  setEvent(event: string): void;
  getBatch(): Array<BulkEventSchema>;
  setBatch(batch: Array<BulkEventSchema>): void;
}

export class SendEvent {
  static constructFromObject(data: object, obj: object): any;
  constructor(event: string, user: User);
  event: string;
  user: User;
  getEvent(): string;
  setEvent(event: string): void;
  getUser(): User;
  setUser(user: User): void;
  getData(): object;
  setData(data: object): void;
  data: object;
  getScheduledAt(): string;
  setScheduledAt(scheduledAt: string): void;
  scheduledAt: string;
  getOverride(): EventOverride;
  setOverride(override: EventOverride): void;
  override: EventOverride;
}

export class EventApi {
  constructor(apiClient: RavenApiClient);
  apiClient: RavenApiClient;
  sendBulkEventWithHttpInfo(
    appId: string,
    event: SendEventBulk,
    opts: object
  ): Promise<Response>;
  sendBulkEvent(
    appId: string,
    event: SendEventBulk,
    opts: object
  ): Promise<Response>;
  sendEventWithHttpInfo(
    appId: string,
    event: SendEvent,
    opts: object
  ): Promise<Response>;
  sendEvent(appId: string, event: SendEvent, opts: object): Promise<Response>;
}
