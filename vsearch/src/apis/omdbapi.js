import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=38fc5446&'
});