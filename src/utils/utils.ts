import { Indexed, PlainObject, StringIndexed } from './types.ts';

export const queryStringify = (data: StringIndexed): string | never => {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        const value = data[key];
        const endLine = index < keys.length - 1 ? '&' : '';

        if (Array.isArray(value)) {
            const arrayValue = value.reduce<StringIndexed>((arrResult, arrData, arrIndex) => ({
                ...arrResult,
                [`${key}[${arrIndex}]`]: arrData,
            }), {});

            return `${result}${queryStringify(arrayValue)}${endLine}`;
        }

        if (typeof value === 'object') {
            const objValue = Object.keys(value || {}).reduce<StringIndexed>(
                (objResult, objKey) => ({
                    ...objResult,
                    [`${key}[${objKey}]`]: value[objKey],
                }),
                {},
            );

            return `${result}${queryStringify(objValue)}${endLine}`;
        }

        return `${result}${key}=${value}${endLine}`;
    }, '');
};

const isPlainObject = (value: unknown): value is PlainObject => typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';

const isArray = (value: unknown): value is [] => Array.isArray(value);

// eslint-disable-next-line max-len
const isArrayOrObject = (value: unknown): value is [] | PlainObject => isPlainObject(value) || isArray(value);

export const deepEquals = (lhs: PlainObject, rhs: PlainObject) => {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (deepEquals(value, rightValue)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
};

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
        [key]: acc,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }), value as any);
    return Object.assign(object as Indexed, result);
};

export const convertFormDataToObject = (data: FormData) => Object.fromEntries(data.entries());
