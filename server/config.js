// @flow

const NODE_ENV /*: string */ = process.env.NODE_ENV || 'development';
const PORT /*: number */ = parseInt(process.env.PORT) || 4000;
const SSR /*: boolean */ = process.env.SSR === 'false';

export default { NODE_ENV, PORT, SSR };
