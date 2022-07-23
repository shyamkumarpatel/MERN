import React from 'react';
import axios from 'axios';

const DeleteProduct = (props) => {
    const {refreshListProp, productid} = props;

    const handleDelete = () =>{
        //console.log("productid =", productid);
        ///api/products/delete/:id
        axios.delete(`http://localhost:8000/api/products/delete/${productid}`)
            .then(res=>refreshListProp())
            .catch(err=>console.log(err))
    }
    return (
        <button type="button" onClick={handleDelete}>Delete</button>
    )
}

export default DeleteProduct