import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteProduct from './DeleteProduct';

const DisplayAllProducts = (props) => {
    
    const {products, refreshListProp} = props;

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, i) =>
                <div key={i}>
                    <h3>
                        <Link to={`/${product._id}`}>{product.title}</Link> | <DeleteProduct refreshListProp={refreshListProp} productid={product._id}/>
                    </h3> 
                </div>
            )}
        </div>
    )
}

export default DisplayAllProducts