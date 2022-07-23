import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const DetailsPage = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {
                product ?
                    <div>
                        <h1>{product.title}</h1>
                        <h5>Price: {product.price}</h5>
                        <p>Description: {product.description}</p>
                    </div>
                    :
                <h1> Loading... or Error could have occured</h1>
            }
        </div>
    )
}

export default DetailsPage