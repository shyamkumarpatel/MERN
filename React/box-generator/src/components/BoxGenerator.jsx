import React, {useState} from 'react';
import Box from './Box';

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const createUser = (e) => {
        console.log("Color: ", color);
    };
    return (
        <div>
        <fieldset>
            <legend>Enter Forms Data</legend>
            <form onSubmit={ createUser }>
                <div>
                    <label>Color: </label> 
                    <input type="text" onChange={ (e) => setColor(e.target.value)} value={color} />
                    <input type="submit" value="Add" />
                </div>
            </form>
            <Box color={color}/>
        </fieldset>
    </div>
    )
}

export default BoxGenerator