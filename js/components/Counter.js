// @flow

// ----------------
// Modules
// ----------------
import { html } from "../../web_modules/htm/preact.js";
import { useContext, useState } from "../../web_modules/preact/hooks.js";
// ----------------
// Application
// ----------------
import { AppContext } from "../context/AppContext.js";
// ----------------
// Components
// ----------------
import CodeEditor from "./codemirror/CodeEditor.js";

/*:: type Props = {

} */

const config /*: {lineNumbers: boolean, mode: string} */ = {
  lineNumbers: true,
  mode: "javascript",
};

const Counter = (props /*: Props */) /*: string */ => {
  const [count /*: number */, setCount /*: (count:number) => void */] =
    useState(0);

  const { state, dispatch } /*: {state: AppState, dispatch: Dispatch} */ =
    useContext(AppContext);

  const increaseCounter = (e) => {
    const newValue = count + 1;
    updateCounter(newValue);
  };
  const decreaseCounter = (e) => {
    const newValue = count - 1;
    updateCounter(newValue);
  };

  const updateCounter = (newValue) => {
    setCount(newValue);
    dispatch({
      type: "BROWSER_ONLY",
      payload: {
        counter: newValue,
      },
    });
  };

  return html`<${CodeEditor}
      config="${config}"
      heightRestricted="${false}"
      code="Hello World"
    />
    <div>
      ${count}
      <br />
      <button onClick=${increaseCounter}>Adds</button>
      <br />
      <button onClick=${decreaseCounter}>Subtract</button>
    </div>`;
};

export default Counter;
