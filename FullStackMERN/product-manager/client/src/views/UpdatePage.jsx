import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdatePage = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => 
                {
                    setTitle(res.data.title);
                    setPrice(res.data.price);
                    setDescription(res.data.description);
                })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        console.log({title, price, description});
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title, price, description})
            .then(res => navigate(`/${id}`))
            .catch(err => console.log(err));
    }
    
    return (        
        <div>
            <h1>Edit Product:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} value={description}/>
                </div>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdatePage