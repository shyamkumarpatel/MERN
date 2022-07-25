import React from 'react';
import { Card, Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import { useNavigate } from 'react-router-dom';

const DisplayAllAuthors = (props) => {
    const {authors, refreshListProp} = props;
    const navigate = useNavigate();

    const goToCreatePage = () => {
        navigate(`/new`);
    }

    return (
        <Card className="m-3 ">
            <Card.Header as="h1">Favorite Authors</Card.Header>
            <Card.Body>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={goToCreatePage}>Add an Author</Button>
                </div>
                <Card.Title>We have quotes by:</Card.Title>
                <Table bordered hover className="text-center align-middle">
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                        {authors.map((author, i) =>
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <EditButton author={author}/> {' '}<DeleteButton refreshListProp={refreshListProp} author={author}/>
                                </td>
                                {/* <h3>
                                    <Link to={`/${product._id}`}>{product.title}</Link> | <DeleteProduct refreshListProp={refreshListProp} productid={product._id}/>
                                </h3> */}
                            </tr>
                        )}
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>
    )
}

export default DisplayAllAuthors