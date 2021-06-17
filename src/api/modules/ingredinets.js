export default function (axios) {
    return {
        get() {
            return axios.get('/api/ingredients');
        },
    };
}
