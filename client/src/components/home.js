import React from 'react';
import Navbar from './nav';
import './home.css';


function Home(){

    return (
        <div>
            <Navbar/>
            <div className='inside'>
                <div>save your memories here</div>
            </div>
        </div>
    );
}
export default Home;