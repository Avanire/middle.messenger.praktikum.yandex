import BaseApi from './baseApi';

class ResourcesApi extends BaseApi {
    constructor() {
        super('/resources');
    }

    create = (data: FormData) => this.http.post('', { data });
}

export default new ResourcesApi();
