import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div>
            <fieldset>
                <legend>Enter Forms Data</legend>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={e=>setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </div>
            </fieldset>
            <fieldset>
                <legend>Forms Data</legend>
                <div>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email Address: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            </fieldset>
        </div>
    );
};

export default UserForm;
