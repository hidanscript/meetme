import React from 'react';

function IButton(props) {
    return(
        <input className="input-button" type="button" value={props.value} onclick={props.onclick} />
    );
}

export default IButton;