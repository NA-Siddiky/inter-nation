import React from 'react';

const Country = (props) => {
    // console.log(props);
    const { name, population, region, flag } = props.countryInfo;
    // console.log(name);
    return (
        <div>
            <h4>Country Name: {name}</h4>
            <img style={{width: '20%'}} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;