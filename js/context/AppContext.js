// @flow

// -----------------------
// Modules
// -----------------------
import { createContext } from "../../web_modules/preact.js";
import { html } from "../../web_modules/htm/preact.js";
import { useReducer } from "../../web_modules/preact/hooks.js";
// -----------------------
// Application
// -----------------------
import AppReducer from "./AppReducer.js";
// -----------------------
// Actions
// -----------------------
import stateStorage from "../actions/state_storage.js";

// A context for the state global management
const AppContext /*: any */ = createContext([{}, () /*: any */ => {}]);

/*:: type Props = {
 children: Array<function>
} */
const AppProvider = (props /*: Props */) /*: string */ => {
  //First thing to set once application is loaded for first time and
  //no state has been set
  let parsedInitialStorage = {};

  // Gets the initial state from Application Storage.
  //First try the session storage
  let initialAppStorage = stateStorage.getItem("state", false);
  if (initialAppStorage === undefined || initialAppStorage === null) {
    //In case there is no information in session, it tries local storage
    initialAppStorage = stateStorage.getItem("state", true);
  }

  if (typeof initialAppStorage !== "undefined" && initialAppStorage !== null) {
    parsedInitialStorage = JSON.parse(initialAppStorage);
    parsedInitialStorage = { ...parsedInitialStorage };
  }
  const initialState = parsedInitialStorage;

  const [state /*: AppState */, dispatch /*: Dispatch */] = useReducer(
    AppReducer,
    initialState,
  );

  // Browser only
  if (typeof process === "undefined" || process.release.name !== "node") {
    // If this is the first reload, load the state from the stateStorage.
    if (JSON.stringify(state) === JSON.stringify({})) {
      //
      // Load data from stateStorage
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage
      let sessionStateString /*: string | null | typeof undefined */ =
        stateStorage.getItem("state", state.rememberme);
      if (
        JSON.stringify(state) === JSON.stringify({}) &&
        (sessionStateString === undefined || sessionStateString === null)
      ) {
        // The state is, as yet, unset and there
        // was nothing in the session state, so
        // try the localStorage
        sessionStateString = stateStorage.getItem("state", true);
      }

      // To stop Flow complaining about potentially passing
      /// `null` or `typeof undefined` to JSON.parse()
      if (
        typeof sessionStateString !== "undefined" &&
        sessionStateString !== null
      ) {
        // The string coming from sessionStateStorage might
        // not be JSON.
        try {
          dispatch({
            type: "BROWSER_ONLY",
            payload: { ...JSON.parse(sessionStateString) },
          });
        } catch (e) {
          stateStorage.clear(state.rememberme);
        }
      }
    }

    if (JSON.stringify(state) !== JSON.stringify({})) {
      // Store the state in stateStorage on every render-loop
      stateStorage.setItem("state", JSON.stringify(state), state.rememberme);
    }
  }

  const appContextFunctions /*: AppContextFunctions */ = {
    state,
    dispatch,
  };

  return html`
      <${AppContext.Provider} value=${appContextFunctions}>
				${props.children}
      </${AppContext.Provider}>
  `;
};

export { AppContext, AppProvider };

/*::
	export type AppContextFunctions = {
		state: AppState,
		dispatch: Dispatch => void,
	}
*/
