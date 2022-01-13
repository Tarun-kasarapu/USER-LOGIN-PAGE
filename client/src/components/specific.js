import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Top from './userinf/top';
import Add from './add';
import Create from './userinf/create';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function Usercard(){
    var {userid}=useParams();
    const [checker,setchecker]=useState(false);
    const [data,setdata]=useState([]);
    console.log(userid);
    const  [profile,setprofile]=useState({
        name:"",
        email:"",
        password:"",
    });
    
   
    useEffect( ()=>{
          axios.get(`http://localhost:5000/login/${userid}`).then((res)=>{
         console.log('in usercar');
         if(res.data.message!=="incorrect"){
         console.log(res);
         
         setprofile({...res.data.dataobj});
         console.log(profile);
         }else{
            setchecker(true);
         }
        });
    },
    []);
     useEffect(()=>{
        
     },
     [data]);
    
    
    return(
        checker?
        <h1>page not found</h1>:  
        <div>
        <Top userid={userid}/>
        <Add username={profile.name}/>
        </div>
        
    );
}
export default Usercard;