import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

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
        <div >
            <h1>Hello From Countries: {countries.length}</h1>

            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    > </Country>)
                }
            </div>

            {/* {  
                countries.map(country => <Country
                    country={country}
                name={country.name.common}
                population={country.population}
                area={country.area}
                region={country.region}
                > </Country>)
            } */}
        </div>
    );
};

export default Countries;