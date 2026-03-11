import type {GitResponseTs} from '../interfaces/api.response';

const apiKey = 'NooCbySt6BQMvQrpM3s5BGkvtBOp7Jqi';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => resp.json())
    .then((body: GitResponseTs) => {

        console.log( body.data.images.downsized_medium.url);
    })
    .catch( err => console.log(err));
