import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${product._id}`)
        .then(res => navigate(`/`))
        .catch(err => console.log(err));
    }

    return (
        <div>
            {
                product ?
                    <div>
                        <h1>{product.title}</h1>
                        <h5>Price: {product.price}</h5>
                        <p>Description: {product.description}</p>
                        <p><Link to={`/`}>Home</Link> | <Link to={`/${product._id}/edit`}>Edit</Link> | <button type="button" onClick={handleDelete}>Delete</button></p>
                    </div>
                    :
                <h1> Loading... or Error could have occured</h1>
            }
        </div>
    )
}

export default DetailsPage