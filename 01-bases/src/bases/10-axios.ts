import axios from 'axios';
import type { GitResponseTs } from '../interfaces/api.response';

const apiKey = 'NooCbySt6BQMvQrpM3s5BGkvtBOp7Jqi';


const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
})

export default giphyApi;

giphyApi.get<GitResponseTs>('/random')
    .then(resp => console.log(resp.data.data.images.downsized_large.url))
    .catch(err => console.log(err));