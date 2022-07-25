import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditPage = () => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [found, setFound] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => 
                {
                    if(res.data.hasOwnProperty('_id')) setFound(true); 
                    setName(res.data.name);
                })
            .catch(err => 
                {
                    console.log(err); 
                    setError(err.response.data.errors.name.message); 
                });
    }, [id]);

    const goToHomePage = () => {
        navigate(`/`);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted-->  ","name=", name);
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {name})
        .then(res => 
            {
                goToHomePage(); 
            })
        .catch(err => 
            {
                console.log(err); 
                setError(err.response.data.errors.name.message); 
            });
    }

    return (
        <Card className="m-3 ">
            <Card.Header as="h1">Favorite Authors</Card.Header>
            <Card.Body>
                <Button variant="primary" onClick={goToHomePage}>Home</Button>
                <Card.Title className="mt-2 ">Edit this author:</Card.Title>
                {found ? 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" size="lg" onChange={(e) => setName(e.target.value)} value={name}/>
                            {error ? <Form.Text>{error}</Form.Text> : <Form.Text></Form.Text>}
                        </Form.Group>
                        <Button variant="secondary" size="lg" onClick={goToHomePage}>Cancel</Button>{' '}<Button variant="success" size="lg" type="submit">Submit</Button>
                    </Form> 
                    :       
                    <ListGroup>
                        <ListGroup.Item>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</ListGroup.Item>
                        <ListGroup.Item>
                            <Link to={`/new`}><Button variant="success" size="lg"> Create an author</Button></Link>
                        </ListGroup.Item>
                    </ListGroup>
                }
            </Card.Body>
        </Card>
    )
}

export default EditPage