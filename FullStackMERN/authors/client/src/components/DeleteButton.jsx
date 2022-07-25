import React from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const DeleteButton = (props) => {
    const {author, refreshListProp} = props;    
    const handleDelete = () =>{
        //console.log("productid =", productid);
        ///api/products/delete/:id
        axios.delete(`http://localhost:8000/api/authors/delete/${author._id}`)
            .then(res=>refreshListProp())
            .catch(err=>console.log(err))
    }
    return (
        <Button variant="danger" size="lg" onClick={handleDelete}>Delete</Button>
    )
}

export default DeleteButton