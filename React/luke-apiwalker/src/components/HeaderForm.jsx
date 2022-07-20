import React , {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const HeaderForm = () => {
    const [type, setType] = useState('people');
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("HeaderForm handleSubmit ---> type=", type, " id=", id);
        navigate(`/${type}/${id}`);
    };
    const containerStyle = {
        display: 'flex',
        margin: '3px'
    };
    const inputStyle = {
        margin: '7px',
        fontSize: '1.25em'
    };
    const buttonStyle = {
        fontSize: '1.25em'
    };

  return (
    <fieldset>
        <legend>Header</legend>
        <form onSubmit={handleSubmit}>
            <div style={containerStyle}>
                <div style={inputStyle}>
                    <label htmlFor="type">Type: </label>
                    <select style={inputStyle} name="type" onChange={e => setType(e.target.value)} value={type}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                    </select>
                </div>
                <div style={inputStyle}>
                    <label htmlFor="id">ID: </label>
                    <input style={inputStyle} type="number" name='id' onChange={e => setId(e.target.value)} value={id}/>
                </div>
                <div style={inputStyle}>
                    <button style={buttonStyle} type='submit'>Search</button>
                </div>
            </div>
        </form>
    </fieldset>
  )
}

export default HeaderForm