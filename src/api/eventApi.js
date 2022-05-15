export const sendBulk =
  (apiClient) =>
  ({ appId, event, opts }) => {
    return new Promise((resolve, reject) => {
      opts = opts || {};
      let postBody = event;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        reject({
          message:
            "Missing the required parameter 'appId' when calling sendBulkEvent",
        });
      }

      if (typeof appId !== "string") {
        reject({ message: 'Parameter "appId" should be of type "string"' });
      }

      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        reject({
          message:
            "Missing the required parameter 'event' when calling sendBulkEvent",
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
      let returnType = null;
      apiClient
        .callApi(
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
        )
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };

export const send =
  (apiClient) =>
  ({ appId, event, opts }) => {
    return new Promise((resolve, reject) => {
      opts = opts || {};
      let postBody = event;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        reject({
          message:
            "Missing the required parameter 'appId' when calling sendEvent",
        });
      }

      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        reject({
          message:
            "Missing the required parameter 'event' when calling sendEvent",
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
      let returnType = null;

      return apiClient
        .callApi(
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
        )
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };
