import config from '../config/config';

console.log('secret: ', config.secret);
export const jwtConstants = {
  secret: config.secret,
};
