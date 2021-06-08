import axios from './axios';
import ingredientsModule from './api/ingredinets';
import favoritesModule from './api/favorites';


export default {
    favorites: favoritesModule(axios),
    ingredients: ingredientsModule(axios),
}
