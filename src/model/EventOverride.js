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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EmailOverride', 'model/ProviderOverride', 'model/PushOverride', 'model/SlackOverride', 'model/SmsOverride', 'model/VoiceOverride', 'model/WebhookOverride', 'model/WhatsappOverride'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailOverride'), require('./ProviderOverride'), require('./PushOverride'), require('./SlackOverride'), require('./SmsOverride'), require('./VoiceOverride'), require('./WebhookOverride'), require('./WhatsappOverride'));
  } else {
    // Browser globals (root is window)
    if (!root.RavenApi) {
      root.RavenApi = {};
    }
    root.RavenApi.EventOverride = factory(root.RavenApi.ApiClient, root.RavenApi.EmailOverride, root.RavenApi.ProviderOverride, root.RavenApi.PushOverride, root.RavenApi.SlackOverride, root.RavenApi.SmsOverride, root.RavenApi.VoiceOverride, root.RavenApi.WebhookOverride, root.RavenApi.WhatsappOverride);
  }
}(this, function(ApiClient, EmailOverride, ProviderOverride, PushOverride, SlackOverride, SmsOverride, VoiceOverride, WebhookOverride, WhatsappOverride) {
  'use strict';

  /**
   * The EventOverride model module.
   * @module model/EventOverride
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EventOverride</code>.
   * @alias module:model/EventOverride
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EventOverride</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventOverride} obj Optional instance to populate.
   * @return {module:model/EventOverride} The populated <code>EventOverride</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = EmailOverride.constructFromObject(data['email']);
      if (data.hasOwnProperty('sms'))
        obj.sms = SmsOverride.constructFromObject(data['sms']);
      if (data.hasOwnProperty('whatsapp'))
        obj.whatsapp = WhatsappOverride.constructFromObject(data['whatsapp']);
      if (data.hasOwnProperty('push'))
        obj.push = PushOverride.constructFromObject(data['push']);
      if (data.hasOwnProperty('webhook'))
        obj.webhook = WebhookOverride.constructFromObject(data['webhook']);
      if (data.hasOwnProperty('voice'))
        obj.voice = VoiceOverride.constructFromObject(data['voice']);
      if (data.hasOwnProperty('slack'))
        obj.slack = SlackOverride.constructFromObject(data['slack']);
      if (data.hasOwnProperty('providers'))
        obj.providers = ApiClient.convertToType(data['providers'], {'String': ProviderOverride});
    }
    return obj;
  }

  /**
   * @member {module:model/EmailOverride} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {module:model/SmsOverride} sms
   */
  exports.prototype.sms = undefined;

  /**
   * @member {module:model/WhatsappOverride} whatsapp
   */
  exports.prototype.whatsapp = undefined;

  /**
   * @member {module:model/PushOverride} push
   */
  exports.prototype.push = undefined;

  /**
   * @member {module:model/WebhookOverride} webhook
   */
  exports.prototype.webhook = undefined;

  /**
   * @member {module:model/VoiceOverride} voice
   */
  exports.prototype.voice = undefined;

  /**
   * @member {module:model/SlackOverride} slack
   */
  exports.prototype.slack = undefined;

  /**
   * @member {Object.<String, module:model/ProviderOverride>} providers
   */
  exports.prototype.providers = undefined;


  return exports;

}));