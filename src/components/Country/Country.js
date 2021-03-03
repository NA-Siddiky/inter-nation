import React from 'react';
import { Button } from 'react-bootstrap'


const Country = (props) => {
    const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px' };

    // console.log(props);
    const { name, population, region, flag } = props.countryInfo;
    // console.log(name);
    const handleAddBtn = props.handleAddBtn;

    return (
        <div style={countryStyle}>
            <h4>Country Name: {name}</h4>
            <img style={{ width: '20%' }} src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            {/* <Button variant="success">Success</Button>{' '} */}
            <button onClick={() => handleAddBtn(props.countryInfo)}>Add Country</button>
        </div>
    );
};

export default Country;