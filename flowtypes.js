export type AppState = {};

export type Dispatch = ({
  type: string,
  payload: any,
}) => void;

declare module "../web_modules/preact-render-to-string.js" {
  declare module.exports: any;
}

declare module "../../web_modules/htm/preact.js" {
  declare module.exports: any;
}

declare module "../../web_modules/preact-router.js" {
  declare module.exports: any;
}

declare module "../../web_modules/preact/hooks.js" {
  declare module.exports: any;
}

declare module "../../web_modules/preact.js" {
  declare module.exports: any;
}

declare module "../../../web_modules/htm/preact.js" {
  declare module.exports: any;
}

declare module "../../../web_modules/preact/hooks.js" {
  declare module.exports: any;
}

declare module "../../../web_modules/codemirror.js" {
  declare module.exports: any;
}
