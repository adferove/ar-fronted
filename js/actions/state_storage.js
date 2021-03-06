// @flow

const clear /*: function */ = (
  rememberMe /*: boolean */ = false
) /*: void */ => {
  if (process === undefined || process.release.name !== 'node') {
    if (rememberMe !== undefined && rememberMe)
      localStorage.removeItem('state');
    else sessionStorage.clear();
  }
};

const getItem /*: function */ = (
  itemName /*: string */,
  rememberMe /*: boolean | typeof undefined */ = false
) /*: string | null | typeof undefined */ => {
  // Browser only
  if (typeof process === 'undefined' || process.release.name !== 'node') {
    if (typeof rememberMe !== 'undefined' && rememberMe === true) {
      //
      // Load data from sessionStorage
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage
      return localStorage.getItem(itemName);
    } else {
      return sessionStorage.getItem(itemName);
    }
  } else {
    return '{}';
  }
};

const setItem /*: function */ = (
  itemName /*: string */,
  itemValue /*: Object */,
  rememberMe /*: boolean | typeof undefined */ = false
) /*: void */ => {
  // Browser only
  if (typeof process === 'undefined' || process.release.name !== 'node') {
    if (typeof rememberMe !== 'undefined' && rememberMe === true) {
      //
      // Load data from sessionStorage
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage
      sessionStorage.clear();
      localStorage.setItem(itemName, itemValue);
    } else {
      localStorage.clear();
      sessionStorage.setItem(itemName, itemValue);
    }
  }
};

export default { clear, getItem, setItem };
