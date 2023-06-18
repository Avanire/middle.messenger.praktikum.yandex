import { HTTPMethod, TOptions } from '../utils/types.ts';
import { API_URL, METHODS } from '../utils/constant.ts';
import { queryStringify } from '../utils/utils.ts';

class HttpTransport {
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${API_URL}${endpoint}`;
    }

    get: HTTPMethod = (path = '/', options = {}) => (
        this.request(this.endpoint + path, { ...options, method: METHODS.GET }, options.timeout)
    );

    post: HTTPMethod = (path, options = {}) => (
        this.request(this.endpoint + path, { ...options, method: METHODS.POST }, options.timeout)
    );

    put: HTTPMethod = (path, options = {}) => (
        this.request(this.endpoint + path, { ...options, method: METHODS.PUT }, options.timeout)
    );

    delete: HTTPMethod = (path, options = {}) => (
        this.request(this.endpoint + path, { ...options, method: METHODS.DELETE }, options.timeout)
    );

    request(
        url: string,
        options: TOptions = { method: METHODS.GET },
        timeout = 5000,
    ): Promise<XMLHttpRequest> {
        const { headers, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No methods'));
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

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGetMethod || !data) {
                xhr.send();
            } else if (data.constructor === FormData) {
                xhr.send(data);
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}

export default HttpTransport;
