// @flow

import { html } from '../web_modules/htm/preact.js';
import { useState } from '../web_modules/preact/hooks.js';

/*:: type Props = {

} */

const Counter = (props /*: Props */) /*: string */ => {
  const [count /*: number */, setCount /*: (count:number) => void */] =
    useState(0);
  return html`<div>
    ${count}
    <br />
    <button onClick=${(e) => setCount(count + 1)}>Adds</button>
    <br />
    <button onClick=${(e) => setCount(count - 1)}>Subtract</button>
  </div>`;
};

export default Counter;
