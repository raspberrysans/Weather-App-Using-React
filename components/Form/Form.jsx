import React, { useState } from 'react';
import './Form.css';

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        if(!location || location === '')
            return;
        submitSearch(location);
    }
    return (
        <form onSubmit={onSubmit} flex-wrap= "wrap">
            <h1 className="textheading" > Please enter a location.</h1>
            <input
                aria-label="location"
                type="text"
                className="input"
                placeholder="Enter a location"
                required
                value = {location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className="button" onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};


export default Form;
