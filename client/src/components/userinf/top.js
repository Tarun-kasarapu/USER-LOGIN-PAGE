import React from 'react';
import './top.css';
import {Link} from 'react-router-dom'

function Top(props){
    console.log('tar');
    console.log(props);
    return(

        <div className="inside_top">
            <div className="home_inside">
               <Link to={`/login/${props.userid}`}>
                        Home
                    </Link>
                </div>
            <div className="create1">
                <div className='create'>
                    <Link to={`/create/${props.userid}`}>
                        Create
                    </Link>
                </div>
                <div className="logout">
                    <Link to="/login">Logout
                    </Link>
                    </div>
            </div>

        </div>
    );
}
export default Top;