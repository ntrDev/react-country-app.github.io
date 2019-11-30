import React, { Component } from 'react';

import './random-country.css';

import CountryApi from '../../service/country-service';

export default class RandomCountry extends Component{

    countryApi = new CountryApi();

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            population: null,
            area: null,
            subregion: null,
            borders: null};
    }
    

    componentDidMount(){
        this.updateCountry();
    }
    updateCountry(){
        this.countryApi.callingCodeCountry(372)
            .then((country)=>{
                this.setState({
                    name: country[0].name,
                    population: country[0].population,
                    area: country[0].area,
                    subregion: country[0].subregion,
                    borders: country[0].borders
                });
            });
    }

    render(){

        const {name,population,area,subregion,borders} = this.state;
        return(
            <div>
                <div>
                {/* <img src= alt="flag"/> */}
                </div>
                <ul>
                    <li>{name}</li>
                    <li>{population}</li>
                    <li>{area}</li>
                    <li>{subregion}</li>
                    <li>{borders}</li>
                </ul>
            </div>
            
        );
    }
}

