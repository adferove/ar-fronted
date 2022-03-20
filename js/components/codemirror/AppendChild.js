// @flow

// ----------------------------------------
// Modules
// ----------------------------------------
import { html } from "../../../web_modules/htm/preact.js";
import { useEffect, useState } from "../../../web_modules/preact/hooks.js";

/*:: type Props={
 child: HTMLInputElement,
 afterAppend: function
} */
const AppendChild = ({ child, afterAppend } /*: Props */) /*: string */ => {
  const [id /*: string */, setId] = useState(
    "z" + Math.random().toString(36).substring(2, 15),
  );

  useEffect(
    () /*: any */ => {
      const idElement /*: HTMLElement|null */ = document.querySelector(
        "#" + id,
      );

      if (idElement !== null) {
        while (idElement.firstChild)
          idElement.removeChild(idElement.firstChild);
        idElement.appendChild(child);
      } else {
        console.error("The #id element doesn't exist");
      }
      if (afterAppend !== null) afterAppend();
    },
    [],
  );

  return html`<div data-cy="code-editor" id=${id}></div>`;
};

export default AppendChild;
