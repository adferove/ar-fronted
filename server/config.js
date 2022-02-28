// @flow

const NODE_ENV /*: string */ = process.env.NODE_ENV || 'development';
const PORT /*: number */ = parseInt(process.env.PORT) || 4000;
const SSR /*: boolean */ = process.env.SSR === 'false';
const REMEMBER_ME /*: boolean */ = process.env.REMEMBER_ME === 'true';

export default { NODE_ENV, PORT, SSR, REMEMBER_ME };
