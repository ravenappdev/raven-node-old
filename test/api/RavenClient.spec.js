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
        it(test["name"], function (done) {
          var appId = test["input"]["appId"];
          var event = test["input"]["event"];

          var opts = {
            idempotencyKey: uuidv4(),
          };

          instance
            .sendBulk({ appId, event, opts })
            .then(function (response) {
              try {
                expect(response.success).to.be.equal(test["output"]["success"]);
                expect(response.id).to.be.a("string");
                done();
              } catch (err) {
                done(err);
              }
            })
            .catch((err) => {
              try {
                expect(err).to.be.deep.equal(test["output"]);

                done();
              } catch (err) {
                done(err);
              }
            });
        });
      });
    });

    describe("sendEvent", function () {
      const tests = testData["EventApi"]["sendEvent"];
      tests.forEach((test) => {
        it(test["name"], function (done) {
          var appId = test["input"]["appId"];
          var event = test["input"]["event"];

          var opts = {
            idempotencyKey: uuidv4(),
          };

          instance
            .send({ appId, event, opts })
            .then(function (response) {
              try {
                expect(response.success).to.be.equal(test["output"]["success"]);
                expect(response.id).to.be.a("string");
                done();
              } catch (err) {
                done(err);
              }
            })
            .catch((err) => {
              try {
                expect(err).to.be.deep.equal(test["output"]);

                done();
              } catch (err) {
                done(err);
              }
            });
        });
      });
    });
  });
});
