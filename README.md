# Raven

raven - Client SDK for Raven Api
This is the SDK Documentation of Raven. You can find out more about Raven at [https://ravenapp.dev/](https://ravenapp.dev/).

# Installation (via [npm](https://nodejs.org/))

<!-- ### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via: -->

```shell
npm install @ravenappdev/raven --save
```

<!-- #### git

#

If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/raven_api
then install it via:

```shell
    npm install YOUR_USERNAME/raven_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false,
      },
    },
  ];
}
``` -->

# Requirements

You will need to get a Raven API key to get started. You can sign up and create one for free at [ravenapp.dev](https://ravenapp.dev/).

# Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

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

# Documentation for API Endpoints

All URIs are relative to *https://api.ravenapp.dev*

| Class       | Method                                    | HTTP request                                | Description                                          |
| ----------- | ----------------------------------------- | ------------------------------------------- | ---------------------------------------------------- |
| RavenClient | [**sendBulk**](docs/EventApi.md#sendBulk) | **POST** /v1/apps/{app_id}/events/bulk_send | sends the event in bulk to all the clients specified |
| RavenClient | [**send**](docs/EventApi.md#send)         | **POST** /v1/apps/{app_id}/events/send      | sends the event to the client specified              |

## Documentation for Models

- [Attachments](docs/Attachments.md)
- [EmailOverride](docs/EmailOverride.md)
- [EmailRecipient](docs/EmailRecipient.md)
- [EventOverride](docs/EventOverride.md)
- [Param](docs/Param.md)
- [ProviderOverride](docs/ProviderOverride.md)
- [PushOverride](docs/PushOverride.md)
- [Response](docs/Response.md)
- [SendEvent](docs/SendEvent.md)
- [SendEventBulk](docs/SendEventBulk.md)
- [SlackOverride](docs/SlackOverride.md)
- [SlackProfile](docs/SlackProfile.md)
- [SmsOverride](docs/SmsOverride.md)
- [User](docs/User.md)
- [VoiceOverride](docs/VoiceOverride.md)
- [WebhookOverride](docs/WebhookOverride.md)
- [WhatsappOverride](docs/WhatsappOverride.md)

## Documentation for Authorization

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
