import { h, hydrate, render } from '../web_modules/preact.js';
import { html } from '../web_modules/htm/preact.js';
import App from './App.js';

hydrate(html`<${App} />`, document.getElementById('funpeople'));
