export const deepEquals = (a: any, b: any): boolean => {
    if (a === b) {
        return true;
    }

    if ((typeof a === 'object' && a != null) && (typeof b === 'object' && b != null)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const prop in a) {
            // eslint-disable-next-line no-prototype-builtins
            if (b.hasOwnProperty(prop)) {
                if (!deepEquals(a[prop], b[prop])) {
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;
    }

    return false;
};

export const queryStringify = (data: any): string => {
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index > 0 ? '&' : ''}`, '?');
};
