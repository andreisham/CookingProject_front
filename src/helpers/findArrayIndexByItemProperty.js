export default function (array, value, prop = 'id') {
    return array.findIndex(item => item[prop] === value);
}
