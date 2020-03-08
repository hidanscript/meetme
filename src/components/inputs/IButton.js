import React from 'react';
import { Link } from 'react-router-dom';

function IButton(props) {
    
    if(props.route === undefined) {
        return(
            <input className="input-button" type="button" value={props.value} onClick={() => props.onclick()} />
        );
    } else {
        return( 
            <Link to={props.route}>
                <input className="input-button" type="button" value={props.value}/> 
            </Link>
        );
    }
}

export default IButton;