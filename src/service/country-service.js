export default class CountryApi {
    
    _apiUrl = 'https://restcountries.eu/rest/v2';

    async getResourse(url){
        const res = await fetch(`${this._apiUrl}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}`+
            `, received ${res.status}`)
        }
        return await res.json();
    }

    async getNameCountry(eesi){
        const res = await this.getResourse('/name/eesi');
        return res.results;
    }
    callingCodeCountry(id){
        return this.getResourse(`/callingcode/${id}`);
    }
    
}

const cou = new CountryApi();

cou.callingCodeCountry(372).then((body)=>{
    console.log(body);
});
