// @flow
import fs from "fs";

export const funpeopleElement /*: string */ = "div"; // typically either "div" or "body"

export const cacheTtl /*: number */ = 0; // Seconds

export const appPaths = () /*: Array<string> */ => {
  const appContents = fs.readFileSync(
    "./js/components/RouteHandler.js",
    "utf8",
  );
  const keyValues = appContents.match(/path=".+"/g);
  const paths /*: Array<string>*/ = [];
  if (Array.isArray(keyValues)) {
    keyValues.forEach((currentElement /*: string */) /*: void */ => {
      const [key, value] = currentElement.split("=");
      const valueNoParams = value.split("/:")[0];
      paths.push(valueNoParams.replace(/\"/g, ""));
    });
  }
  return paths;
};

export const unCachedUrls /*: Array<string> */ = ["/people/tim"];
