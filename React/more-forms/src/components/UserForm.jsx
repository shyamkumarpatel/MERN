import React, { useState } from  'react';
import Display from './Display';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const firstNameValidation = () => {
        if( firstName.length!==0 && firstName.length<2 ) {
            return " Error: First Name is less than 2 characters";
        }
    };
    const lastNameValidation = () => {
        if( lastName.length!==0 && lastName.length<2 ) {
            return " Error: Last Name is less than 2 characters";
        }
    };
    const emailValidation = () => {
        if( email.length!==0 && email.length<5 ) {
            return " Error: Email Address is less than 5 characters";
        }
    };
    const passwordValidation = () => {
        if( password.length!==0 && password.length<8 ) {
            return " Error: Password is less than 8 characters";
        }
    };
    const confirmPasswordValidation = () => {
        if( confirmPassword.length!==0 && password !==  confirmPassword) {
            return " Error: Password must match";
        }
    };

    return(
        <div>
            <fieldset>
                <legend>Enter Forms Data</legend>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} value={firstName} />
                    <span class="error">{firstNameValidation()}</span>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} value={lastName}/>
                    <span class="error">{lastNameValidation()}</span>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={e=>setEmail(e.target.value)} value={email}/>
                    <span class="error">{emailValidation()}</span>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                    <span class="error">{passwordValidation()}</span>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    <span class="error">{confirmPasswordValidation()}</span>
                </div>
            </fieldset>
            <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
        </div>
    );
};

export default UserForm;
