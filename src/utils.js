export const convertToType = (data, type) => {
  if (data === null || data === undefined) return data;

  switch (type) {
    case "Boolean":
      return Boolean(data);
    case "Integer":
      return parseInt(data, 10);
    case "Number":
      return parseFloat(data);
    case "String":
      return String(data);
    case "Date":
      return parseDate(String(data));
    case "Blob":
      return data;
    default:
      if (type === Object) {
        // generic object, return directly
        return data;
      } else if (typeof type === "function") {
        // for model type like: User
        return type.constructFromObject(data);
      } else if (Array.isArray(type)) {
        // for array type like: ['String']
        var itemType = type[0];

        return data.map((item) => {
          return convertToType(item, itemType);
        });
      } else if (typeof type === "object") {
        // for plain object type like: {'String': 'Integer'}
        var keyType, valueType;
        for (var k in type) {
          if (type.hasOwnProperty(k)) {
            keyType = k;
            valueType = type[k];
            break;
          }
        }

        var result = {};
        for (var k in data) {
          if (data.hasOwnProperty(k)) {
            var key = convertToType(k, keyType);
            var value = convertToType(data[k], valueType);
            result[key] = value;
          }
        }

        return result;
      } else {
        // for unknown type, return the data directly
        return data;
      }
  }
};

export const constructFromObject = (data, obj, itemType) => {
  if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      if (data.hasOwnProperty(i)) obj[i] = convertToType(data[i], itemType);
    }
  } else {
    for (var k in data) {
      if (data.hasOwnProperty(k)) obj[k] = convertToType(data[k], itemType);
    }
  }
};

export const parseDate = (str) => {
  return new Date(str);
};

export const deserialize = (response, returnType) => {
  if (response == null || returnType == null || response.status == 204) {
    return null;
  }

  // Rely on SuperAgent for parsing response body.
  // See http://visionmedia.github.io/superagent/#parsing-response-bodies
  var data = response.body;
  if (
    data == null ||
    (typeof data === "object" &&
      typeof data.length === "undefined" &&
      !Object.keys(data).length)
  ) {
    // SuperAgent does not always produce a body; use the unparsed response as a fallback
    data = response.text;
  }

  return convertToType(data, returnType);
};

export const isFileParam = (param) => {
  // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
  if (typeof require === "function") {
    let fs;
    try {
      fs = require("fs");
    } catch (err) {}
    if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
      return true;
    }
  }

  // Buffer in Node.js
  if (typeof Buffer === "function" && param instanceof Buffer) {
    return true;
  }

  // Blob in browser
  if (typeof Blob === "function" && param instanceof Blob) {
    return true;
  }

  // File in browser (it seems File object is also instance of Blob, but keep this for safe)
  if (typeof File === "function" && param instanceof File) {
    return true;
  }

  return false;
};

export const normalizeParams = (params) => {
  var newParams = {};
  for (var key in params) {
    if (
      params.hasOwnProperty(key) &&
      params[key] != undefined &&
      params[key] != null
    ) {
      var value = params[key];
      if (isFileParam(value) || Array.isArray(value)) {
        newParams[key] = value;
      } else {
        newParams[key] = paramToString(value);
      }
    }
  }

  return newParams;
};

export const paramToString = (param) => {
  if (param == undefined || param == null) {
    return "";
  }
  if (param instanceof Date) {
    return param.toJSON();
  }

  return param.toString();
};

export const buildUrl = ({ basePath, path, pathParams }) => {
  if (!path.match(/^\//)) {
    path = "/" + path;
  }

  var url = basePath + path;
  url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
    var value;
    if (pathParams.hasOwnProperty(key)) {
      value = paramToString(pathParams[key]);
    } else {
      value = fullMatch;
    }

    return encodeURIComponent(value);
  });

  return url;
};

export const isJsonMime = (contentType) => {
  return Boolean(
    contentType != null && contentType.match(/^application\/json(;.*)?$/i)
  );
};

export const jsonPreferredMime = (contentTypes) => {
  for (var i = 0; i < contentTypes.length; i++) {
    if (isJsonMime(contentTypes[i])) {
      return contentTypes[i];
    }
  }

  return contentTypes[0];
};
