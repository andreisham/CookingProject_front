export default function (axios) {
    return {
        getByIngredients(ingredients) {
            return axios.get('/api/meals', {
                params: { ingredient: ingredients },
            });
        },

        getById(id) {
            return axios.get('/api/meals/' + id);
        },

        getRandom() {
            return axios.get('/api/meal/random');
        }
    };
}
