import React from 'react';

const Show = (props) => {
    const show = props.show;
    // console.log(show);

    // let totalPopulation = 0;
    // for (let i = 0; i < show.length; i++) {
    //     const country = show[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    const totalPopulation = show.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>Added Countries: {show.length}</h2>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Show;