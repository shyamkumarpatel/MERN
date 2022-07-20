import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const {id} = useParams();
    const [person, setPerson] = useState();
    const navigate = useNavigate();

    const imgStyle = {
        width: '350px'
    };

    useEffect (() => {
        setPerson(null);
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(result => setPerson(result.data))
            .catch(err => 
                {
                    console.log(err);
                    navigate('/ERROR');
                })
    }, [id, navigate]);

    return (
        <fieldset>
            <legend>People</legend>
            <div>
            {
                person ?
                <div>
                    <h1>{person.name}</h1>
                    <h4>Height: {person.height}</h4>
                    <h4>Mass: {person.mass}</h4>
                    <h4>Hair Color: {person.hair_color}</h4>
                    <h4>Skin Color: {person.skin_color}</h4>
                    <h4>Eye Color: {person.eye_color}</h4>
                </div>
                    :<div>
                        <h1>Loading or errored out??</h1>
                        <img style={imgStyle} src="https://i.kym-cdn.com/entries/icons/original/000/006/026/NOTSUREIF.jpg" alt="hmm...."/>
                    </div>
            }
            </div>
        </fieldset>
    )
}

export default People