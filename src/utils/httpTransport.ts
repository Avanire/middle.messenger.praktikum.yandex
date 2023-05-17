import { TOptions, TOptionsWithoutMethod } from './types.ts';
import { METHODS } from './constant.ts';
import { queryStringify } from './utils.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HttpTransport {
    get(url: string, options: TOptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    }

    post(url, options: TOptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    }

    put(url, options: TOptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
    }

    delete(url, options: TOptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
    }

    request(
        url: string,
        options: TOptions = { method: METHODS.GET },
        timeout = 5000,
    ): Promise<XMLHttpRequest> {
        const { headers, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject();
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGetMethod = method === METHODS.GET;

            xhr.open(method, isGetMethod && !!data ? `${url}${queryStringify(data)}` : url);

            if (headers) {
                Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGetMethod || !data) {
                xhr.send();
            } else {
                xhr.send(data as XMLHttpRequestBodyInit);
            }
        });
    }
}
