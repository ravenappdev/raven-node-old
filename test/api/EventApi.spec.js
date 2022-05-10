import * as raven from "../../src/index";
import chai from "chai";
import chaiHttp from "chai-http";
import { v4 as uuidv4 } from "uuid";
import { testData } from "../testData";

const expect = chai.expect;

chai.use(chaiHttp);
var instance;
beforeEach(() => {
  const client = new raven.RavenApiClient({
    apiKey: testData["apiKey"],
  });
  instance = new raven.EventApi(client);
});

describe("", function () {
  describe("EventApi", function () {
    this.timeout(10000);
    describe("sendBulkEvent", function () {
      const tests = testData["EventApi"]["sendBulkEvent"];
      tests.forEach((test) => {
        // console.log(test);
        it(test["name"], function (done) {
          var appId = test["input"]["appId"];
          var event = new raven.SendEventBulk(
            test["input"]["event"]["event"],
            test["input"]["event"]["batch"]
          );
          // console.log(event);
          var opts = {
            idempotencyKey: uuidv4(),
          };
          // console.log({ appId, event, opts });
          instance
            .sendBulkEvent({ appId, event, opts })
            .then(function (data) {
              expect(data.success).to.be.equal(
                test["output"]["success"]["value"]
              );
              expect(data.id)
                .to.be.a(test["output"]["id"]["type"])
                .length.greaterThan(0);
              expect(data.error).to.be.equal(undefined);
              done();
            })
            .catch((err) => {
              // console.log(err.response.req);
              expect(err).to.be.a("error");
              expect(err.message).to.be.equal(
                test["output"]["error"]["message"]
              );
              if (err.data && Object.keys(err.data).length) {
                expect(err.data.success).to.be.equal(
                  test["output"]["error"]["data"]["success"]
                );
                expect(err.data.error).to.be.equal(
                  test["output"]["error"]["data"]["error"]
                );
              } else {
                expect(err.data).to.be.equal(undefined);
              }
              expect(err.status).to.be.equal(test["output"]["error"]["status"]);
              done();
            })
            .catch((err) => {
              done(err);
            });
        });
      });
    });

    describe("sendEvent", function () {
      const tests = testData["EventApi"]["sendEvent"];
      tests.forEach((test) => {
        // console.log(test);
        it(test["name"], function (done) {
          var appId = test["input"]["appId"];
          var event = new raven.SendEvent(
            test["input"]["event"]["event"],
            test["input"]["event"]["user"]
          );
          // console.log(event);
          var opts = {
            idempotencyKey: uuidv4(),
          };
          // console.log({ appId, event, opts });
          instance
            .sendEvent({ appId, event, opts })
            .then(function (data) {
              expect(data.success).to.be.equal(
                test["output"]["success"]["value"]
              );
              expect(data.id)
                .to.be.a(test["output"]["id"]["type"])
                .length.greaterThan(0);
              expect(data.error).to.be.equal(undefined);
              done();
            })
            .catch((err) => {
              // console.log(err.message);
              expect(err).to.be.a("error");
              expect(err.message).to.be.equal(
                test["output"]["error"]["message"]
              );
              if (err.data && Object.keys(err.data).length) {
                expect(err.data.success).to.be.equal(
                  test["output"]["error"]["data"]["success"]
                );
                expect(err.data.error).to.be.equal(
                  test["output"]["error"]["data"]["error"]
                );
              } else {
                expect(err.data).to.be.equal(undefined);
              }
              expect(err.status).to.be.equal(test["output"]["error"]["status"]);
              done();
            })
            .catch((err) => {
              done(err);
            });
        });
      });
    });
  });
});
