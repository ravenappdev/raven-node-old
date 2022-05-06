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

import {ApiClient} from '../ApiClient';

export class EmailRecipient {
  constructor() {
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmailRecipient();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
    }
    return obj;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

}

EmailRecipient.prototype.name = undefined;

EmailRecipient.prototype.address = undefined;


