import { useState } from "react";
import axios from "axios";
import DisplayRepos from "./DisplayRepos";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function Search(){
  const [user, setUser] = useState({
    userName: "",
    fullName: "",
    email: "",
    location: ""
  });

  const [repos, setRepos] = useState([]);
  
  

  function queryHandler(){
   axios.get(`http://api.github.com/users/${user.userName}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&sort=created`)
   .then(res => {
     setRepos(res.data);
      console.log(res.data);
     })
    .catch(err => {
     console.log(err)
    });
   setUser({
    userName: "",
    fullName: "",
    location: "",
    email: ""
   });

   } 
   function handleChange(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    });
  }
  return(
    <div>
      <div className="input-box">
        <Input type="text"  placeholder="Full name" name="fullName" onChange={handleChange} value={user.fullName}/>
        <Input required type="text"  placeholder="User name" name="userName" onChange={handleChange} value={user.userName}/>
        <Input type="text"  placeholder="Location" name="location" onChange={handleChange} value={user.location}/>
        <Input type="email"  placeholder="Email address" name="email" onChange={handleChange} value={user.email}/>
        
        <Button icon={<SearchOutlined />} onClick={() => queryHandler()}>Search</Button>
      </div>
      {repos.length>0 ?
      <DisplayRepos repos={repos}/> 
      :
      null
       }
    </div>
  )
  }


