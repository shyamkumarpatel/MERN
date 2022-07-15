import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchComponents = () => {
    //Note the second argument is an empty array.
    const [responseData, setResponseData] = useState([]);
    
    const getPokemons =()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1154')
            .then(response=>{setResponseData(response.data.results);
            })
        };
    
    return (
    <div>
        <button onClick={getPokemons}>Fetch Pokemon</button>
        <div>FetchComponents:</div>
        <ul>
            {responseData.map( (pokemon, i) => <li key={i}>{pokemon.name}</li>)}
        </ul>
    </div>
    )
}

export default FetchComponents