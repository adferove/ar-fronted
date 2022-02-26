// @flow

import config from './config.js';

import http from 'http';
import fs from 'fs';
import serveStatic from 'serve-static';
import finalhandler from 'finalhandler';
import render from '../web_modules/preact-render-to-string.js';

var serveAsStatic = serveStatic('.', { index: false });

const requestHandler = (req, res) => {
  req.url = req.url.replace(/\/$/, '');
  const [urlPath /*: string */, queryString /*: string */] = req.url.split('?');
  let generate /*: boolean */ = false;

  if (queryString !== undefined) {
    queryString.split('&').forEach((keyValue /*: string */) => {
      const [key /*: string */, value /*: string */] = keyValue.split('=');
      if (key === 'generate' && value === 'true') generate = true;
    });
  }

  if (urlPath.match(/.+\..+$/) !== null) {
    serveAsStatic(req, res, finalhandler(req, res));
  } else {
    const output = renderToString(urlPath, generate);
    if (generate) {
    }
    res.end(output);
  }
};

const server = http.createServer(requestHandler);

server.listen(config.PORT, (err) => {
  if (err) return console.log('Something not good happened', err);
  console.log(`Server listening on PORT ${config.PORT}`);
});

const renderToString = (
  url /*: string */,
  generate /*: boolean */
) /*: string */ => {
  const index /*: string */ = fs.readFileSync('./index.html', 'utf-8');
  let renderedContent /*: string */ = index;

  //SSR
  if (config.NODE_ENV !== 'development' || generate) {
    //Swap the placeholder copy with the rendered output
  }

  //Do the ENVs
  const re_env_NODE_ENV = new RegExp('_NODE_ENV_', 'g');
  renderedContent = renderedContent.replace(re_env_NODE_ENV, config.NODE_ENV);

  return renderedContent;
};
