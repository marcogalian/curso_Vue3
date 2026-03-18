import {giphyApi} from "./10-axios";
import type {GitResponseTs} from '../interfaces/api.response';

export const getImage = async () => {
    const resp = await giphyApi.get<GitResponseTs>('./random');

    return 'https://url-de-mi-sitio-web/image1.jpg';
}

console.log(getImage());