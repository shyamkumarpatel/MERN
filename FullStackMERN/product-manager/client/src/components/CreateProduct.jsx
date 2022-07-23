import axios from 'axios';
import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const CreateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {refreshListProp} = props;

    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products/new`, {title, price, description})
        .then(res => 
            {refreshListProp(res.data);
                setTitle("");
                setPrice(0);
                setDescription("");
            })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Product Manager</h1>
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
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct