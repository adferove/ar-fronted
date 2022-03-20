// @flow
import { install } from "esinstall";

install(
  [
    "codemirror",
    "htm",
    "htm/preact",
    "preact",
    "preact/hooks",
    "preact-render-to-string",
    "preact-router",
  ],
  { polyfillNode: false },
);
