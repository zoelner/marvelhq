import axios from 'axios';
import crypto from 'crypto';

const ts = Date.now().toString();

const pbkey = 'ffbba05cbd874591b5db98a899fc6bb7';
const pvkey = 'c384278434f521d110f084ce3a982d107a4c8a15';

const hash = crypto.createHash('md5');

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

const params = {
  ts,
  apikey: pbkey,
  hash: hash.update(ts + pvkey + pbkey).digest('hex'),
};

export { api, params };
