/*
 * Raven API
 * This is OpenAPI defintion for the APIs of Raven.  You can find out more about Raven at [https://ravenapp.dev/](https://ravenapp.dev/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@ravenapp.dev
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

import { convertToType } from "../utils";
export class VoiceOverride {
  constructor() {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VoiceOverride();
      if (data.hasOwnProperty("scheduled_at"))
        obj.scheduledAt = convertToType(data["scheduled_at"], "String");
    }
    return obj;
  }

  getScheduledAt() {
    return this.scheduledAt;
  }

  setScheduledAt(scheduledAt) {
    this.scheduledAt = scheduledAt;
  }
}

VoiceOverride.prototype.scheduledAt = undefined;
