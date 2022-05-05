# RavenApi.EventApi

All URIs are relative to *https://api.ravenapp.dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendBulkEvent**](EventApi.md#sendBulkEvent) | **POST** /v1/apps/{app_id}/events/bulk_send | sends the event in bulk to all the clients specified
[**sendEvent**](EventApi.md#sendEvent) | **POST** /v1/apps/{app_id}/events/send | sends the event to the client specified


<a name="sendBulkEvent"></a>
# **sendBulkEvent**
> SuccessResponse sendBulkEvent(appId, event)

sends the event in bulk to all the clients specified

This API will send the event in bulk to the clients specified

### Example
```javascript
var RavenApi = require('raven_api');
var defaultClient = RavenApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new RavenApi.EventApi();

var appId = "appId_example"; // String | app id of raven app

var event = new RavenApi.SendEventBulk(); // SendEventBulk | the body for the event that has to be triggered


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendBulkEvent(appId, event, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| app id of raven app | 
 **event** | [**SendEventBulk**](SendEventBulk.md)| the body for the event that has to be triggered | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendEvent"></a>
# **sendEvent**
> Response sendEvent(appId, event, opts)

sends the event to the client specified

This API will send the event to the client specified

### Example
```javascript
var RavenApi = require('raven_api');
var defaultClient = RavenApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new RavenApi.EventApi();

var appId = "appId_example"; // String | app id of raven app

var event = new RavenApi.SendEvent(); // SendEvent | the body for the event that has to be triggered

var opts = { 
  'idempotencyKey': "idempotencyKey_example" // String | idempotency key of api
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendEvent(appId, event, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| app id of raven app | 
 **event** | [**SendEvent**](SendEvent.md)| the body for the event that has to be triggered | 
 **idempotencyKey** | **String**| idempotency key of api | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

