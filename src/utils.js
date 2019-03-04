
export function objMap(obj, func) {
    const keys = Object.keys(obj);
    var newObj = {};
    for (var k in keys) {
        newObj[k] = func(k, obj[k]);}
    return newObj;
}


export const ONE_K = 1000;
export const ONE_M = 1000 * 1000;
