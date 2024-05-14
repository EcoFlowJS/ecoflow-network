import { EcoContext } from "@ecoflow/types";
import parseUrlFromArray from "../helper/parseUrlFromArray";
import axios from "axios";

async function patchController(this: EcoContext) {
  const { _ } = ecoFlow;
  const { inputs, next } = this;
  let { payload } = this;
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  const { urlEndpoint, bupassValue, patchValue } = inputs;
  let { endpoint, value } = payload.msg;

  if (_.isUndefined(urlEndpoint) || !_.isString(urlEndpoint)) {
    payload.msg = {};
    next();
    return;
  }

  if (_.isUndefined(endpoint)) endpoint = {};
  if (_.isUndefined(value)) value = {};

  const axiosPatchValue = bupassValue
    ? !_.isUndefined(value) && !_.isEmpty(value) && _.isObjectLike(value)
      ? value
      : {}
    : !_.isUndefined(patchValue) &&
      !_.isEmpty(patchValue) &&
      patchValue.validate &&
      _.isString(patchValue.value)
    ? JSON.parse(patchValue.value)
    : {};

  const parsedURI = parseUrlFromArray(
    urlEndpoint
      .split("/")
      .map((path) => {
        if (
          path.startsWith(":") &&
          Object.keys(endpoint).includes(path.slice(1))
        )
          return endpoint[path.slice(1)].toString();
        return path;
      })
      .map((path) => {
        if (path.startsWith(":")) return "undefined";
        return path;
      })
  );

  try {
    payload.msg = (await axios.patch(parsedURI, axiosPatchValue)).data;
    next();
  } catch (error) {
    payload.msg = error;
    next();
  }
}

export default patchController;
