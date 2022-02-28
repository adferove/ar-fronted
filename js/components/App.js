// @flow

import { h } from '../../web_modules/preact.js';
import { html } from '../../web_modules/htm/preact.js';
import Router from '../../web_modules/preact-router.js';
import Counter from './Counter.js';
import { AppProvider } from '../context/AppContext.js';

/*:: type Props = {
 url: string
} */

const App /*: function */ = (props /*: Props */) => {
  return html`<${AppProvider}><${Counter} /></${AppProvider}>`;
};

export default App;