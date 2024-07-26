import React, { useEffect, useState } from 'react'
import "../Register/Register.css"
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
    const [users, setUsers] = useState([]);
    const API_URL = 'http://localhost:3333/users';
    const fetchUsers = async () => {
        try {
          const response = await axios.get(API_URL);
          console.log("response",response);
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
    useEffect(() => {
        fetchUsers();
        // comparingEmailAndUsername();
    },[]);



    const [registerUserDeatails,setRegisterUserDeatails] = useState({
        username : "",
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setRegisterUserDeatails((values) =>({
            ...values,
            [name] : value
        }))
    }
    const navigate = useNavigate();
    const goingToLoginFrom = () => {
      navigate("/")
    }

//   let comparingEmailAndUsername = () => {
//     const findingEmails = users.find((user) => user.username === registerUserDeatails.username && user.email === registerUserDeatails.email);
// if(findingEmails){

// }
//     console.log("details", findingEmails);
//     // return findingEmails;
//   }

    const handleSubmit = async (e) => {
        e.preventDefault();
            const findingEmails = users.find((user) => user.username === registerUserDeatails.username || user.email === registerUserDeatails.email);
            if(findingEmails){
              alert("please check username and email")
            }else {
              const inputResponse = await axios.post(API_URL, registerUserDeatails);
              if(inputResponse.status === 201){
                fetchUsers(); 
                navigate("/")
              }
            }
          setRegisterUserDeatails({ username: '', email: '', password: '' });
        };  
             

  return (
  <div className='register-page'>
    <div>
        <div className='register-form'>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" className='register-label'>Register Form</label>
            <div><input type="text"  onChange={(e) =>handleOnChange(e)} name="username" value={registerUserDeatails.name} placeholder='username' className='username' /></div>
            <div><input type="email" onChange={(e) =>handleOnChange(e)} name="email" value={registerUserDeatails.email} placeholder='email' className='email' /></div>
            <div><input type="password" onChange={(e) =>handleOnChange(e)} name="password" value={registerUserDeatails.password} placeholder='password' className='password' /></div>
            <p className='login-navigate' onClick={goingToLoginFrom}>If you have already an account, login here </p>
            <div><input type='submit' value="Submit" className='rigister-submit'/></div>
        </form>
        </div>

    </div>
    </div>
  )
}

export default Register