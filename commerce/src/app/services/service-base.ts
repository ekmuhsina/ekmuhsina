//this is base class
export abstract class ServiceBase {
    static API_URL = "https://api.chec.io/v1" ;
    static headers = {
        "X-Authorization": "sk_55982ee32628f5d6e2ca37e226c8f70d356893dcdb5ba",
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
    static getUrl(path:string){
        return `${this.API_URL}${path}`
    }
}