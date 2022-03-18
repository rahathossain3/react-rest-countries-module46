import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    //1
    const [countries, setCountries] = useState([]);
    //2
    useEffect(() => {
        //3
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Hello From Countries: {countries.length}</h1>

            {
                countries.map(country => console.log(country))
            }
            {
                countries.map(country => <Country
                    name={country.name.common}
                    population={country.population}
                    area={country.area}>

                </Country>)
            }
        </div>
    );
};

export default Countries;