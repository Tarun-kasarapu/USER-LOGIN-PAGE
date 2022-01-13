import React from 'react';
import './add.css';
function Add(props){

    return (
        <div className='later1'>
            <div class='laterinside'>Hi,{props.username}</div>
            <div class='lateroutside'>Welcome to your page</div>
        </div>
    );

}
export default Add;