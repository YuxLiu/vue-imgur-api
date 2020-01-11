import qs from 'qs';

const CLIENT_ID = '678985071d92f0a';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login:() => {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };
    // redirect url to
    window.location =
      `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
}