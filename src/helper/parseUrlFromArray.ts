const parseUrlFromArray = (urlArray: string[]): string => {
  let result = "";

  if (urlArray.length > 0) for (const path of urlArray) result += path + "/";

  return result.replace(/^\/+|\/+$/g, "");
};

export default parseUrlFromArray;
