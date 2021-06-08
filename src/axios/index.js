import axios from './axios';
import ingredientsModule from './api/ingredinets';
import mealsModule from './api/meals';
import favoritesModule from './api/favorites';


export default {
    favorites: favoritesModule(axios),
    meals: mealsModule(axios),
    ingredients: ingredientsModule(axios),
}
