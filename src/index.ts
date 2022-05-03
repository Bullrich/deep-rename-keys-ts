import isObject from "isobject";

function renameKeys(obj: any, fn: (key: string, val: number) => string) {
    if (!isObject(obj)) {
        throw new TypeError('expected an object');
    }

    if (typeof fn !== 'function') {
        return obj;
    }

    const keys = Object.keys(obj);
    const result: { [key: string]: string } = {};

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        const val = obj[key];
        const str = fn(key, val);
        if (typeof str === 'string' && str !== '') {
            key = str;
        }
        result[key] = val;
    }
    return result;
}

function isArray(val: any) {
    if (Array.isArray) return Array.isArray(val);
    return val instanceof Array;
}

function isObjOrArray(val: any): 'object' | 'array' | 'none' {
    if (isArray(val)) {
        return 'array';
    }

    const type = toString.call(val);
    switch (type) {
        case '[object Object]': return 'object';
    }

    return 'none';
}

export default function renameDeep(obj: any, cb: (key: string, val: number) => string) {
    const type = isObjOrArray(obj);

    if (type === 'none') {
        throw new Error('expected an object');
    }

    let res: any = [];
    if (type === 'object') {
        obj = renameKeys(obj, cb);
        res = {};
    }

    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
            const val = obj[key];
            if (isObjOrArray(val) === 'object' || isObjOrArray(val) === 'array') {
                res[key] = renameDeep(val, cb);
            } else {
                res[key] = val;
            }
        }
    }
    return res;
}
