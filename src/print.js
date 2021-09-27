import React from 'react';
import './App.css';

function print(props){
    return(
        <div>
        <h1>User Details</h1>
        <h3>Name:</h3><br />
        <h3>{props.name}</h3><br /><br />
        <h3>Age:</h3><br />
        <h3>{props.age}</h3><br /><br />
        <h3>Topic:</h3><br />
        <h3>{props.topic}</h3><br /><br />
        <h3>Experience:</h3><br />
        <h3>{props.experience}</h3><br /><br />
        <h3>Contact:</h3><br />
        <h3>{props.contact}</h3><br /><br />
        <h3>Email:</h3><br />
        <h3>{props.email}</h3><br /><br />
        <h3>Other Interests:</h3><br />
        <h3>{props.interests}</h3><br /><br />
        </div>
    );
}

export default print;