export default function (axios) {
    return {
        getByIngredients(ingredients) {
            return axios.get('/api/meals', {
                params: { ingredient: ingredients },
            });
        },

        getCountByIngredients(ingredients) {
            return axios.get('/api/meals/count', {
                params: { ingredients }
            });
        },

        getById(id) {
            return axios.get('/api/meals/' + id);
        },

        getList() {
            return axios.get('/api/meals/list');
        },

        getRandom() {
            return axios.get('/api/meal/random');
        }
    };
}
