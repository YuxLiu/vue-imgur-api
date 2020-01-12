import qs from 'qs';
import axios from 'axios'
const CLIENT_ID = '678985071d92f0a';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };
    // redirect url to
    window.location =
      `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  },
  uploadImages(images, token) {
    // map to an array of promises
    const promises = Array.from(images).map(image => {
      // in js
      const formData = new FormData();
      formData.append('image', image);
      // axios return 1 promise
      return axios.post(
        `${ROOT_URL}/3/image`, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    });
    // resolve until all promises are resolved
    return Promise.all(promises);
  }
}