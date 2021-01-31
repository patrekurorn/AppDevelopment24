import axios from 'axios';

export const getToken = async () => axios.post(
  'https://api.kvikmyndir.is/authenticate',
  {
    username: 'pht24',
    password: 'palmividar',
  },
).then((response) => response.data.token);

export default getToken;
