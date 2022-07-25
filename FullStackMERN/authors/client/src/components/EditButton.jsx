import React from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const DeleteButton = (props) => {
    const {author} = props;
    return (
    <Link to={`/edit/${author._id}`}>
        <Button variant="warning" size="lg">Edit</Button>
    </Link>
    )
}

export default DeleteButton