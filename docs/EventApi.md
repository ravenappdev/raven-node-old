# raven.EventApi

All URIs are relative to *https://api.ravenapp.dev*

| Method                               | HTTP request                                | Description                                          |
| ------------------------------------ | ------------------------------------------- | ---------------------------------------------------- |
| [**sendBulk**](EventApi.md#sendBulk) | **POST** /v1/apps/{app_id}/events/bulk_send | sends the event in bulk to all the clients specified |
| [**send**](EventApi.md#send)         | **POST** /v1/apps/{app_id}/events/send      | sends the event to the client specified              |

<a name="sendBulk"></a>

# **sendBulk**

> Response sendBulk({appId, event, opts})

sends the event in bulk to all the clients specified

This API will send the event in bulk to the clients specified

### Example

```javascript
import { RavenClient } from "raven";

const config = {
  // Configure API key authorization
  apiKey: "YOUR API KEY",
  /*
   //uncomment of you want to override the base path
  basePath: "YOU BASE PATH"
  */
};
const raven = RavenClient(config);

var appId = "appId_example"; // {String} app id of raven app

var event = {
  //event payload for bulk event to be trggered
};

var opts = {
  //other options
  idempotencyKey: uuidv4(),
};

raven.sendBulk({ appId, event, opts }).then(
  function (response) {
    console.log("API called successfully. Returned response: " + response);
  },
  function (error) {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type                                  | Description                                     | Notes      |
| ------------------ | ------------------------------------- | ----------------------------------------------- | ---------- |
| **appId**          | **String**                            | app id of raven app                             |
| **event**          | [**SendEventBulk**](SendEventBulk.md) | the body for the event that has to be triggered |
| **idempotencyKey** | **String**                            | idempotency key of api                          | [optional] |

### Return type

[**Response**](Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="send"></a>

# **send**

> Response send({appId, event, opts})

sends the event to the client specified

This API will send the event to the client specified

### Example

```javascript
import { RavenClient } from "raven";

const config = {
  // Configure API key authorization
  apiKey: "YOUR API KEY",
  /*
   //uncomment of you want to override the base path
  basePath: "YOU BASE PATH"
  */
};
const raven = RavenClient(config);

var appId = "appId_example"; // {String} app id of raven app

var event = {
  //event payload for bulk event to be trggered
};

var opts = {
  //other options
  idempotencyKey: uuidv4(),
};

raven.send({ appId, event, opts }).then(
  function (response) {
    console.log("API called successfully. Returned response: " + response);
  },
  function (error) {
    console.error(error);
  }
);
```

### Parameters

| Name               | Type                          | Description                                     | Notes      |
| ------------------ | ----------------------------- | ----------------------------------------------- | ---------- |
| **appId**          | **String**                    | app id of raven app                             |
| **event**          | [**SendEvent**](SendEvent.md) | the body for the event that has to be triggered |
| **idempotencyKey** | **String**                    | idempotency key of api                          | [optional] |

### Return type

[**Response**](Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
