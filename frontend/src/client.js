import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const Project_ID = 'rexyk5aw';
const Token = 'sk3L5nt1KhqLl0Zsbi8V06li27EJ2z6URQn8IYCK5b5dAZGv3DDhDlIckt2U3qeOFO35MuNRTvdZHd15pAnQhTuc0cXl09UcWq0yyQ0zqbHrF7ke6pBeowG0URul4KA3DELJmk7Vd9AjcOGfCMOEPE2e0qEqyraUQIiRkxsxNvjFldrXkr8S'

export const client = sanityClient({
    projectId: Project_ID,//sacarlo de los tokens de sanity cuando tenga internet y ponerlo en .env :(
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: Token//sacarlo de los tokens de sanity cuando tenga internet y ponerlo en .env :(

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

