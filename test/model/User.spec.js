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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RavenApi);
  }
}(this, function(expect, RavenApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('User', function() {
      beforeEach(function() {
        instance = new RavenApi.User();
      });

      it('should create an instance of User', function() {
        // TODO: update the code to test User
        expect(instance).to.be.a(RavenApi.User);
      });

      it('should have the property userId (base name: "user_id")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property mobile (base name: "mobile")', function() {
        // TODO: update the code to test the property mobile
        expect(instance).to.have.property('mobile');
        // expect(instance.mobile).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property whatsappMobile (base name: "whatsapp_mobile")', function() {
        // TODO: update the code to test the property whatsappMobile
        expect(instance).to.have.property('whatsappMobile');
        // expect(instance.whatsappMobile).to.be(expectedValueLiteral);
      });

      it('should have the property onesignalExternalId (base name: "onesignal_external_id")', function() {
        // TODO: update the code to test the property onesignalExternalId
        expect(instance).to.have.property('onesignalExternalId');
        // expect(instance.onesignalExternalId).to.be(expectedValueLiteral);
      });

      it('should have the property fcmTokens (base name: "fcm_tokens")', function() {
        // TODO: update the code to test the property fcmTokens
        expect(instance).to.have.property('fcmTokens');
        // expect(instance.fcmTokens).to.be(expectedValueLiteral);
      });

      it('should have the property iosTokens (base name: "ios_tokens")', function() {
        // TODO: update the code to test the property iosTokens
        expect(instance).to.have.property('iosTokens');
        // expect(instance.iosTokens).to.be(expectedValueLiteral);
      });

      it('should have the property fcmTopic (base name: "fcm_topic")', function() {
        // TODO: update the code to test the property fcmTopic
        expect(instance).to.have.property('fcmTopic');
        // expect(instance.fcmTopic).to.be(expectedValueLiteral);
      });

      it('should have the property fcmDeviceGroup (base name: "fcm_device_group")', function() {
        // TODO: update the code to test the property fcmDeviceGroup
        expect(instance).to.have.property('fcmDeviceGroup');
        // expect(instance.fcmDeviceGroup).to.be(expectedValueLiteral);
      });

      it('should have the property slack (base name: "slack")', function() {
        // TODO: update the code to test the property slack
        expect(instance).to.have.property('slack');
        // expect(instance.slack).to.be(expectedValueLiteral);
      });

      it('should have the property onesignalPlayerIds (base name: "onesignal_player_ids")', function() {
        // TODO: update the code to test the property onesignalPlayerIds
        expect(instance).to.have.property('onesignalPlayerIds');
        // expect(instance.onesignalPlayerIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
