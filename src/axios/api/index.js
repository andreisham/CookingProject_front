import axios from '../axios';
import favoritesModule from './favorites';

export default {
    favorites: favoritesModule(axios),
}
