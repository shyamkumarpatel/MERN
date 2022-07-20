import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Starships = () => {
    const {id} = useParams();
    const [starship, setStarship] = useState();
    const navigate = useNavigate();

    const imgStyle = {
        width: '350px'
    };

    useEffect (() => {
      setStarship(null);
      axios.get(`https://swapi.dev/api/starships/${id}`)
          .then(result => setStarship(result.data))
          .catch(err => 
              {
                  console.log(err);
                  navigate('/ERROR');
              })
  }, [id]);

  return (
    <fieldset>
        <legend>Starships</legend>
        <div>
          {
            starship?
            <div>
                <h1>{starship.name}</h1>
                <h3>Model: {starship.model}</h3>
                <h3>Manufacturer: {starship.manufacturer}</h3>
                <h3>Starship Class: {starship.starship_class}</h3>
                <h3>Passengers: {starship.passengers}</h3>
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

export default Starships