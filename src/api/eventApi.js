import { Response } from "../model/Response";
function sendBulkEventWithHttpInfo({ appId, event, opts }, apiClient) {
  opts = opts || {};
  let postBody = event;

  // verify the required parameter 'appId' is set
  try {
    if (appId === undefined || appId === null) {
      throw new Error(
        "Missing the required parameter 'appId' when calling sendBulkEvent"
      );
    }

    if (typeof appId !== "string") {
      throw new Error('Parameter "appId" should be of type "string"');
    }

    // verify the required parameter 'event' is set
    if (event === undefined || event === null) {
      throw new Error(
        "Missing the required parameter 'event' when calling sendBulkEvent"
      );
    }
  } catch (err) {
    return new Promise((_, reject) => {
      reject(err);
    });
  }

  let pathParams = {
    app_id: appId,
  };
  let queryParams = {};
  let headerParams = {
    "Idempotency-Key": opts["idempotencyKey"],
  };
  let formParams = {};

  let authNames = ["ApiKeyAuth"];
  let contentTypes = ["application/json"];
  let accepts = ["application/json"];
  let returnType = Response;
  return apiClient.callApi(
    "/v1/apps/{app_id}/events/bulk_send",
    "POST",
    pathParams,
    queryParams,
    headerParams,
    formParams,
    postBody,
    authNames,
    contentTypes,
    accepts,
    returnType
  );
}
export const sendBulk =
  (apiClient) =>
  ({ appId, event, opts }) => {
    return sendBulkEventWithHttpInfo({ appId, event, opts }, apiClient).then(
      function (response) {
        return response;
      }
    );
  };
function sendEventWithHttpInfo({ appId, event, opts }, apiClient) {
  opts = opts || {};
  let postBody = event;

  try {
    // verify the required parameter 'appId' is set
    if (appId === undefined || appId === null) {
      throw new Error(
        "Missing the required parameter 'appId' when calling sendEvent"
      );
    }

    // verify the required parameter 'event' is set
    if (event === undefined || event === null) {
      throw new Error(
        "Missing the required parameter 'event' when calling sendEvent"
      );
    }
  } catch (err) {
    return new Promise((_, reject) => {
      reject(err);
    });
  }

  let pathParams = {
    app_id: appId,
  };
  let queryParams = {};
  let headerParams = {
    "Idempotency-Key": opts["idempotencyKey"],
  };
  let formParams = {};

  let authNames = ["ApiKeyAuth"];
  let contentTypes = ["application/json"];
  let accepts = ["application/json"];
  let returnType = Response;

  return apiClient.callApi(
    "/v1/apps/{app_id}/events/send",
    "POST",
    pathParams,
    queryParams,
    headerParams,
    formParams,
    postBody,
    authNames,
    contentTypes,
    accepts,
    returnType
  );
}
export const send =
  (apiClient) =>
  ({ appId, event, opts }) => {
    return sendEventWithHttpInfo({ appId, event, opts }, apiClient).then(
      function (response) {
        return response;
      }
    );
  };
