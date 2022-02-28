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

/*:: type Props = {

} */

const Counter = (props /*: Props */) /*: string */ => {
  const [count /*: number */, setCount /*: (count:number) => void */] =
    useState(0);

  const { state, dispatch } /*: {state: AppState, dispatch: Dispatch} */ =
    useContext(AppContext);

  const increaseCounter = () => {
    const newValue = count + 1;
    updateCounter(newValue);
  };
  const decreaseCounter = () => {
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

  return html`<div>
    ${count}
    <br />
    <button onClick=${(e) => increaseCounter()}>Adds</button>
    <br />
    <button onClick=${(e) => decreaseCounter()}>Subtract</button>
  </div>`;
};

export default Counter;
