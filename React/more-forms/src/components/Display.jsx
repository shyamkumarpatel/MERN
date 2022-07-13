import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
    <legend>Forms Data</legend>
    <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email Address: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm Password: {props.confirmPassword}</p>
    </div>
</fieldset>
  )
}

export default Display