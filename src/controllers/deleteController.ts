import { EcoContext } from "@ecoflow/types";
import parseUrlFromArray from "../helper/parseUrlFromArray";
import axios from "axios";

async function deleteController(this: EcoContext) {
  const { _ } = ecoFlow;
  const { inputs, next } = this;
  let { payload } = this;
  if (_.isUndefined(inputs)) {
    payload.msg = {};
    next();
    return;
  }

  const { urlEndpoint } = inputs;

  if (_.isUndefined(urlEndpoint) || !_.isString(urlEndpoint)) {
    payload.msg = {};
    next();
    return;
  }

  const parsedURI = parseUrlFromArray(
    urlEndpoint
      .split("/")
      .map((path) => {
        if (
          path.startsWith(":") &&
          Object.keys(payload.msg).includes(path.slice(1))
        )
          return payload.msg[path.slice(1)].toString();
        return path;
      })
      .map((path) => {
        if (path.startsWith(":")) return "undefined";
        return path;
      })
  );

  try {
    payload.msg = (await axios.delete(parsedURI)).data;
    next();
  } catch (error) {
    payload.msg = error;
    next();
  }
}

export default deleteController;
