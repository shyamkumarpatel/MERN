import React, {useState} from 'react';

const BoxGenerator = (props) => {
    //let colors = [];
    const [color, setColor] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        props.color(color);
        setColor("");
    };
    return (
        <div>
        <fieldset>
            <legend>Enter Color of Box:</legend>
            <form onSubmit={ createUser }>
                <div>
                    <label>Color: </label> 
                    <input type="text" onChange={ (e) => setColor(e.target.value)} value={color} />
                    <input type="submit" value="Add" />
                </div>
            </form>
        </fieldset>
    </div>
    )
}

export default BoxGenerator