import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ecc2296b5444c9c3c35d142b18a95b8d5a6334f99968f8845b01cce95bcb211d'
  }
});