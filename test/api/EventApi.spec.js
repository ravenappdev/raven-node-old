import * as raven from "../../src/index";
import chai from "chai";
import chaiHttp from "chai-http";
import { v4 as uuidv4 } from "uuid";
import { testData } from "../testData";

const expect = chai.expect;

chai.use(chaiHttp);
var instance;
beforeEach(() => {
  instance = raven.RavenClient({
    apiKey: testData["apiKey"],
  });
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
          var event = test["input"]["event"];
          // console.log(event);
          var opts = {
            idempotencyKey: uuidv4(),
          };
          // console.log({ appId, event, opts });
          instance
            .sendBulk({ appId, event, opts })
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
          var event = test["input"]["event"];
          // console.log(event);
          var opts = {
            idempotencyKey: uuidv4(),
          };
          // console.log({ appId, event, opts });
          instance
            .send({ appId, event, opts })
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
