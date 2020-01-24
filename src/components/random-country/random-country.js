import React, { Component } from 'react';

import './random-country.css';

import CountryApi from '../../service';


export default class RandomCountry extends Component{

    countryApi = new CountryApi();

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            capital: null,
            population: null,
            area: null,
            subregion: null,
            borders: null,
            alpha3Code: null
        };
    }
    

    componentDidMount(){
        this.updateCountry();
    }
    updateCountry(){
        this.countryApi.callingCodeCountry(60)
            .then((country)=>{
                this.setState({
                    name: country[0].name,
                    capital: country[0].capital,
                    population: country[0].population,
                    area: country[0].area,
                    subregion: country[0].subregion,
                    borders: country[0].borders,
                    alpha3Code: country[0].alpha3Code.toLowerCase()
                });
            });
    }

    render(){
        
        const {name,capital,population,area,subregion,borders,alpha3Code} = this.state;
       
        return(
            <section className="country_info">
                <div className="country_info_wrapp">
                    <div className="img_wrapp">
                        <img src={`https://restcountries.eu/data/${alpha3Code}.svg`} alt="flag"/>
                    </div>
                    <ul>
                        <li className="country_name">Название страны : {name}</li>
                        <li className="country_capital">Столица страны : {capital}</li>
                        <li>{population} чел</li>
                        <li>{area} км²</li>
                        <li>{subregion}</li>
                        <li>{borders}</li>
                        <li>{alpha3Code}</li>
                    </ul>
                </div>
            </section>
            
            
        );
    }
}

