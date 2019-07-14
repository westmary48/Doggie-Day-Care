import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        walks.push(res.data[fbKey]);
      });
      resolve(walks);
    })
    .catch(err => reject(err));
});

const deleteSingleWalk = walkId => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const addWalk = walkObject => axios.post(`${baseUrl}/walks.json`, walkObject);

export default { getWalks, deleteSingleWalk, addWalk };
