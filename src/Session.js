import React from 'react';
import './Session.css'; 

const Session = (props) => {
    return (
    <div className={`Session ${props.level}`}>
        <h2 className="Session-title">{props.title}</h2>
        <span className="Session-room">{props.room}</span>
    </div>)
}

export default Session;