export class ApiService {
    
    public async getContentBlock(options: { name: string }): Promise<any> {
        const response = await fetch(`${this.baseUrl}api/contentblock/getbyname?name=${options.name}`);
        const json = await response.json();
        return json.contentBlock;        
    }

    public get baseUrl() {
        return "http://content/quinntynebrown.com/";
    }
}
