export default function (axios) {
    return {
        get() {
            return axios.get('/api/favorites');
        },

        add(mealId) {
            return axios.post('/api/favorites/meals/' + mealId);
        },

        remove(mealId) {
            return axios.delete('/api/favorites/meals/' + mealId);
        },
    };
}
