export default function (array, value, prop = 'id') {
    return array.find(item => item[prop] === value);
}