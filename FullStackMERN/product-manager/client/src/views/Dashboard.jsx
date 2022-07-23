import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct'
import DisplayAllProducts from '../components/DisplayAllProducts'

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
    }, [refresh]);

    const refreshList = ()=>{
        setRefresh(!refresh);
    }
    
    return (
        <div>
            <CreateProduct refreshListProp={refreshList}/>
            <hr/>
            <DisplayAllProducts products={products}/>
        </div>
    )
}

export default Dashboard