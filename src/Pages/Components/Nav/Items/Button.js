import React from 'react'
import './button.css'
import { Link } from 'react-router-dom';


function Button(props) {
    return (
        <div className="button_Main mx-2">
            <Link to={props.url}>
                <button className="Nav_button " > {props.title} </button>


            </Link>


        </div>
    )
}

export default Button
