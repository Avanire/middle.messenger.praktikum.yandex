import HttpTransport from '../core/httpTransport/httpTransport';

export default abstract class BaseApi {
    protected http: HttpTransport;

    protected constructor(endpoint: string) {
        this.http = new HttpTransport(endpoint);
    }
}
