import React,{ useState } from "react"
import "./sign.css"
import { useForm } from "react-hook-form";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import Navbar from './nav';

function Sign(){
    const {register,handleSubmit, errors}=useForm();
    let navigate=useNavigate();
    const [formdata,setformdata]= useState({
        name:"",
        email:"",
        password:"",
    });
    async function send_data(e){
        e.preventDefault(true);
        await axios.post('http://localhost:5000/signin',formdata).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err.message);
        });
        setformdata({
            name:"",
            email:"",
            password:"",
        });
        navigate('/');
    }
    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className="checker">
                <h1>Sign in</h1>
            <form className="form" onSubmit={send_data}>
                <div className="form-elements">
                <label className="label label1">UserName</label>
                <input type="text" className="input input1" name="name" value={formdata.name} onChange={(e)=>{
                    setformdata({...formdata,name:e.target.value});
                }} /><br/>
                <label className="label label2">Email</label>
                <input type="email" className="input input2" name="email" value={formdata.email} onChange={(e)=>{
                    setformdata({...formdata,email:e.target.value});
                }}  /><br/>
                <label className="label label3">Password</label>
                <input type="password" className="input input3" name="password" value={formdata.password} onChange={(e)=>{
                    setformdata({...formdata,password:e.target.value});
                }}  /><br/>
                <div  className="submit">
                <button type="submit" className="submit1" > Submit </button>
                </div>
                </div>
            </form>
                <div>Or</div>
                <button className="login">
                <Link to="/login" >
                    Login
                </Link>
                </button>
            </div>
        </div>
        </div>
    );
}
export default Sign