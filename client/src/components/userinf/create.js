import React,{useState,useEffect} from 'react';
import './create.css';
import Top from './top';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';

function Create(){ 
    const {userid}= useParams();
    console.log(userid);
    const [checker,setchecker]=useState(false);
    const [matter,setmatter]=useState({data:''});
    const [filename,setfilename]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:5000/login/${userid}`).then((res)=>{
        console.log('in usercar');
        if(res.data.message!=="incorrect"){
            console.log(res);
        
        
        }else{
           setchecker(true);
        }
       });
   },
   []);
   async function happen(e){
       e.preventDefault();
       console.log('hi');
       const obj={name:matter.data,file:filename.name};
       console.log(filename);
       console.log(obj);
       await axios.post(`http://localhost:5000/create/${userid}`,obj).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err.message);
        });
   }
    return (
        checker?
        <h1>invalid user access</h1>:
        <div>
        <div className='inside_create'>
            <Link to={`/login/${userid}`}>
            Back to Home
            </Link>
        </div>
        <div className="create_class1">
            <div className='outline'>
            <h1 className="memory">Creating a memory</h1>
            <form className="creator"  onSubmit={happen}>
                <input placeholder='Caption' type="text" name='data' value={matter.data}className="caption" onChange={(e)=>{
                        console.log(e.target);
                        setmatter({data:e.target.value});
                }}/>
                <br/>
                <input type="file"  className="file"  name='selected'  onChange={(e)=>{
                        setfilename(e.target.files[0]);
                }}/>
                
                <br/>
                <button type='submit' className="submit5">Create</button>
            </form>
            </div>
        </div>
        </div>
    );
}
export default Create;