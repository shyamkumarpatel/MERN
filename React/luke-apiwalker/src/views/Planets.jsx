import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState();
    const navigate = useNavigate();

    const imgStyle = {
        width: '350px'
    };

    useEffect (() => {
        setPlanet(null);
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(result => setPlanet(result.data))
            .catch(err => 
                {
                    console.log(err);
                    navigate('/ERROR');
                })
    }, [id, navigate]);

    
    return (
        <fieldset>
            <legend>Planets</legend>
            <div>
                {
                    planet?
                    <div>
                        <h1>{planet.name}</h1>
                        <h3>Diameter: {planet.diameter} km</h3>
                        <h3>Climate: {planet.climate}</h3>
                        <h3>Population: {planet.population}</h3>
                        <h3>Orbital Period: {planet.orbital_period} day(s)</h3>
                    </div>
                    :
                    <div>
                        <h1>Loading or errored out??</h1>
                        <img style={imgStyle} src="https://i.kym-cdn.com/entries/icons/original/000/006/026/NOTSUREIF.jpg" alt="hmm...."/>
                    </div>
            }
            </div>
        </fieldset>
    )
}

export default Planets