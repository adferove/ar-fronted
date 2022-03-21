// @flow
import { install } from "esinstall";

install(
  [
    "codemirror",
    "codemirror/mode/javascript/javascript",
    "htm",
    "htm/preact",
    "preact",
    "preact/hooks",
    "preact-render-to-string",
    "preact-router",
  ],
  { polyfillNode: false },
);
