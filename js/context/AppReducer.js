// @flow

export default (
  state /*: AppState */,
  action /*: { type:string, payload:any } */,
) /*: AppState */ => {
  switch (action.type) {
    case "BROWSER_ONLY":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
