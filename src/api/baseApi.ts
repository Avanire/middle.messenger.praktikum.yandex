import HttpTransport from '../core/httpTransport';

export default abstract class BaseApi {
    protected http: HttpTransport;

    protected constructor(endpoint: string) {
        this.http = new HttpTransport(endpoint);
    }
}
