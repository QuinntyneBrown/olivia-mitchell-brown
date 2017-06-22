export class ApiService {
    
    public async getContentBlock(options: { name: string }): Promise<any> {
        const response = await fetch(`${this._baseUrl}api/contentblock/getbyname?name=${options.name}`, { headers: this._headers });
        const json = await response.json();
        return json.contentBlock;        
    }

    private get _baseUrl() {
        return "http://admin.oliviamitchellbrown.com/";
    }

    private get _headers() {
        let headers = new Headers();
        headers.append("Tenant", "1c3dae2e-bad0-4958-8e7d-160eb0c470c8");
        return headers;
    } 
}
