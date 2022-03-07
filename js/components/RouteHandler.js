// @flow

// ----------------------------------------------------
// Modules
// ----------------------------------------------------
import Router from "../../web_modules/preact-router.js";
import { html } from "../../web_modules/htm/preact.js";
// ----------------------------------------------------
// Components
// ----------------------------------------------------
import Counter from "./Counter.js";

/*:: type Props={

} */
const RouteHandler = (props /*: Props */) /*: string */ => {
  return html`
  <${Router}>
   <${Counter} path="/counter" />
  </${Router}>`;
};

export default RouteHandler;
