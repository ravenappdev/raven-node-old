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

import superagent from "superagent";
import querystring from "querystring";
import {
  convertToType,
  constructFromObject,
  parseDate,
  deserialize,
  buildUrl,
  normalizeParams,
  isFileParam,
  paramToString,
} from "./utils";
const DEFAULTS = {
  BASE_URL: "https://api.ravenapp.dev".replace(/\/+$/, ""),
};

const CollectionFormatEnum = {
  CSV: ",",

  SSV: " ",

  TSV: "\t",

  PIPES: "|",

  MULTI: "multi",
};

const RavenApiClientConfig = (config) => {
  return {
    basePath: config["basePath"] || DEFAULTS.BASE_URL,
    authentications: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        apiKey: config["apiKey"],
        apiKeyPrefix: "AuthKey",
      },
    },
    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000 // in ms
     */
    timeout: 60000,
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    cache: true,

    defaultHeaders: {},

    /**
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if enableCookies is set to true.
     * @type {Boolean}
     * @default true
     */
    enableCookies: true,
    agent: config["agent"] || new superagent.agent(),
  };
};

const buildCollectionParam = (param, collectionFormat) => {
  if (param == null) {
    return null;
  }
  switch (collectionFormat) {
    case "csv":
      return param.map(paramToString).join(",");
    case "ssv":
      return param.map(paramToString).join(" ");
    case "tsv":
      return param.map(paramToString).join("\t");
    case "pipes":
      return param.map(paramToString).join("|");
    case "multi":
      //return the array directly as SuperAgent will handle it as expected
      return param.map(paramToString);
    default:
      throw new Error("Unknown collection format: " + collectionFormat);
  }
};

const applyAuthToRequest = (request, authNames, authentications) => {
  authNames.forEach((authName) => {
    var auth = authentications[authName];
    switch (auth.type) {
      case "basic":
        if (auth.username || auth.password) {
          request.auth(auth.username || "", auth.password || "");
        }

        break;
      case "apiKey":
        if (auth.apiKey) {
          var data = {};
          if (auth.apiKeyPrefix) {
            data[auth.name] = auth.apiKeyPrefix + " " + auth.apiKey;
          } else {
            data[auth.name] = auth.apiKey;
          }

          if (auth["in"] === "header") {
            request.set(data);
          } else {
            request.query(data);
          }
        }

        break;
      case "oauth2":
        if (auth.accessToken) {
          request.set({ Authorization: "Bearer " + auth.accessToken });
        }

        break;
      default:
        throw new Error("Unknown authentication type: " + auth.type);
    }
  });
};

const callApi = ({
  cache,
  basePath,
  authentications,
  defaultHeaders,
  timeout,
  enableCookies,
  agent,
}) => {
  return (
    path,
    httpMethod,
    pathParams,
    queryParams,
    headerParams,
    formParams,
    bodyParam,
    authNames,
    contentTypes,
    accepts,
    returnType
  ) => {
    var url = buildUrl({ basePath, path, pathParams });
    var request = superagent(httpMethod, url);

    // apply authentications
    applyAuthToRequest(request, authNames, authentications);

    // set query parameters
    if (httpMethod.toUpperCase() === "GET" && cache === false) {
      queryParams["_"] = new Date().getTime();
    }

    request.query(normalizeParams(queryParams));

    // set header parameters
    request.set(defaultHeaders).set(normalizeParams(headerParams));

    // // set requestAgent if it is set by user
    // if (requestAgent) {
    //   request.agent(requestAgent);
    // }

    // set request timeout
    request.timeout(timeout);

    var contentType = jsonPreferredMime(contentTypes);
    if (contentType) {
      // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
      if (contentType != "multipart/form-data") {
        request.type(contentType);
      }
    } else if (!request.header["Content-Type"]) {
      request.type("application/json");
    }

    if (contentType === "application/x-www-form-urlencoded") {
      request.send(querystring.stringify(normalizeParams(formParams)));
    } else if (contentType == "multipart/form-data") {
      var _formParams = normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(bodyParam);
    }

    var accept = jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    if (returnType === "Blob") {
      request.responseType("blob");
    } else if (returnType === "String") {
      request.responseType("string");
    }

    // Attach previously saved cookies, if enabled
    if (enableCookies) {
      if (typeof window === "undefined") {
        agent.attachCookies(request);
      } else {
        request.withCredentials();
      }
    }

    return new Promise((resolve, reject) => {
      request.end((error, response) => {
        if (error) {
          reject(error);
        } else {
          try {
            var data = deserialize(response, returnType);
            if (enableCookies && typeof window === "undefined") {
              agent.saveCookies(response);
            }

            resolve({ data, response });
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  };
};

export class RavenApiClient {
  constructor(options = {}) {
    this.config = RavenApiClientConfig({
      ...options,
    });
  }

  CollectionFormatEnum = CollectionFormatEnum;
  paramToString = paramToString;
  buildUrl = buildUrl;
  isJsonMime = isJsonMime;
  jsonPreferredMime = jsonPreferredMime;
  isFileParam = isFileParam;
  normalizeParams = normalizeParams;
  buildCollectionParam = buildCollectionParam;
  applyAuthToRequest = applyAuthToRequest;
  deserialize = deserialize;
  callApi = callApi(this.config);
  parseDate = parseDate;
  convertToType = convertToType;
  constructFromObject = constructFromObject;
}
