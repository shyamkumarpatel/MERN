import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePage = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate(`/`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted","name=", name);
        axios.post(`http://localhost:8000/api/authors/new`, {name})
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
                <Card.Title className="mt-2 ">Add a new author:</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="name" onChange={(e) => setName(e.target.value)} value={name}/>
                        {error ? <Form.Text>{error}</Form.Text> : <Form.Text></Form.Text>}
                    </Form.Group>
                    <Button variant="secondary" size="lg" onClick={goToHomePage}>Cancel</Button>{' '}<Button variant="success" size="lg" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreatePage