import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayAllProducts = (props) => {
    
    const {products} = props;

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, i) =>
                <div key={i}>
                    <h3>
                        <Link to={`/${product._id}`}>{product.title}</Link>
                    </h3> 
                </div>
            )}
        </div>
    )
}

export default DisplayAllProducts