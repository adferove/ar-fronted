// @flow

// ---------------------------------------
// Modules
// ---------------------------------------
import { html } from "../../../web_modules/htm/preact.js";
import AppendChild from "./AppendChild.js";
import CodeMirror from "../../../web_modules/codemirror.js";

/*:: type Props = {
  setText: function,
  code: string,
  config: Object,
  textAreaHeight: number,
  heightRestricted: boolean,
} */
const CodeEditor = (
  { setText, code, config, textAreaHeight, heightRestricted } /*: Props */,
) /*: string */ => {
  if (code !== undefined) {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("data-cy", "editor-area");
    textarea.value = code;

    return html`<${AppendChild}
      child=${textarea}
      afterAppend=${
        () /*: any */ => {
          const cm = CodeMirror.fromTextArea(textarea, config);
          let cmHeight = "auto";
          if (textAreaHeight !== null && textAreaHeight !== undefined) {
            if (!heightRestricted) {
              cmHeight = "auto";
            } else if (textAreaHeight < 10.75) {
              cmHeight = textAreaHeight + "rem";
            }
          }
          cm.setSize("100%", cmHeight);
          if (setText) {
            cm.on("change", () /*: any */ => {
              setText(cm.getValue());
            });
          }
        }
      }
    />`;
  } else return html`Loading`;
};

export default CodeEditor;
