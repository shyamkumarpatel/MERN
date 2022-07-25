import React from 'react';
import DisplayAllAuthors from '../components/DisplayAllAuthors';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [authors, setAuthors] = useState([]);
    
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
    }, [refresh]);

    const refreshList = ()=>{
        setRefresh(!refresh);
    }

    return (
        <DisplayAllAuthors authors={authors} refreshListProp={refreshList}/>
    )
}

export default Dashboard