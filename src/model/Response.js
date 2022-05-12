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
export class Response {
  constructor() {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Response();
      if (data.hasOwnProperty("success"))
        obj.success = convertToType(data["success"], "Boolean");
      if (data.hasOwnProperty("id"))
        obj.id = convertToType(data["id"], "String");
      if (data.hasOwnProperty("error"))
        obj.error = convertToType(data["error"], "String");
    }
    return obj;
  }

  getSuccess() {
    return this.success;
  }

  setSuccess(success) {
    this.success = success;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getError() {
    return this.error;
  }

  setError(error) {
    this.error = error;
  }
}

Response.prototype.success = undefined;

Response.prototype.id = undefined;

Response.prototype.error = undefined;
