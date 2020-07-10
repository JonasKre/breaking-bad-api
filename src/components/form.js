import React from 'react';
import '../App.scss';

function Form(props) {
    return(
        <form className="form" onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} className="form-input" type="text" name="search" id="search" placeholder="Search for..." />
            <input className="form-submit" type="submit" value="Search" />
        </form>
    );
}

export default Form;