import React,{useState} from "react"
import "./login.css"
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import Navbar from './nav';

function Login(props){
    let navigate=useNavigate();
    const [userdata,setuserdata]=useState({
        email:"",
        password:"",
    });
    async function finduserdata(e){
        e.preventDefault();
        
        await axios.post('http://localhost:5000/login',userdata).then((res)=>{
            var st=res.data.message;
            if(st==='incorrect'){
                window.alert(st);
            }else{
                props.uniqueuser(res.data.dataobj);
                setuserdata({
                    name:"",
                    email:"",
                    password:"",
                });
                console.log(res.data.dataobj);
                navigate(`/login/${res.data.dataobj._id}`);
            }
            
        }).catch((err)=>{
            console.log(err.message);
        });
        
        
     }
    return (
        <div>
        <Navbar/>
        <div className="container">
        <div className="checker1">
            <h1 className="head">Log in</h1>
        <form className="form">
            <div className="form-elements">
            <label className="label label2">Email</label>
            <input type="email" className="input input2" name="email" value={userdata.email} onChange={(e)=>{
                setuserdata({...userdata,email:e.target.value});
            }}/><br/>
            <label className="label label3">Password</label>
            <input type="password" className="input input3" name="password" value={userdata.password} onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/><br/>
            <div  className="submit">
            <button type="submit" className="submit1" onClick={finduserdata}> Login </button>
            </div>
            </div>
        </form>
            <div>Or</div>
            <button className="login">
            <Link to="/signin">
                
                Sign in
                </Link>
            </button>
        </div>
    </div>
    </div>
    );
}
export default Login;