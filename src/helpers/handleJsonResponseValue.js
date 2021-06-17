export default function(value) {
    if (typeof value === 'string') {
        return JSON.parse(value);
    }
    return value;
}