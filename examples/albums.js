// TODO: fazer funcionar babel-node
import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('Incubus');

albums.then((data) => console.log(data));
