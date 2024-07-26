import React, { useEffect, useRef, useState } from 'react';
import "../Login/Login.css";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { AiFillEye } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/io";



import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Home from '../../Home/Home';

const Login = () => {
    const [userDeatails, setUserDeatails] = useState({
        email: "",
        password: "",
    });
    const [api, setApi] = useState([]);
    const [activeIcon, setActiveIcon] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);


    const navigate = useNavigate();
    // const inputRef = useRef();
    const goingToRegisterFrom = () => {
        navigate("/register")
    }

    const goingToHomePage = () => {
        navigate("/home")
    }

    const UsersApi = "http://localhost:3333/users";
    const fetchingApi = async () => {
        let response = await axios.get(UsersApi);
        setApi(response.data)
    }

    useEffect(() => {
        fetchingApi();
    }, [])

    console.log("api", api);

    const hanldeInputChange = (e) => {
        const { name, value } = e.target;
        setUserDeatails(prevsData => ({
            ...prevsData,
            [name]: value
        }));
    }


    const togglePasswordVisibility = () => {
        setActiveIcon(!activeIcon)
    }


    const onFormSubmit = (e) => {
        e.preventDefault();
        const inputEmail = userDeatails.email;
        const inputPassword = userDeatails.password;
        let user = api.find((val) => val.email === inputEmail && val.password === inputPassword);
        let findingNamesFromTheApi = user;
        if (user) {
            navigate("/home", { state: { findingNamesFromTheApi } });
            console.log("bala logged to home");
        } else {
            alert("you entered different email, please choose correct one")
        }
        setUserDeatails({
            email: "",
            password: "",
        })
    }
    return (
        <div className="login-page">
            <div className='login-form'>
                <form action="" onSubmit={(e) => onFormSubmit(e)}>
                    <label htmlFor="" className='login-label'>Login Form</label>
                    <div><input type="email" name="email" onChange={(e) => hanldeInputChange(e)} value={userDeatails.email} placeholder='email' className='email' /></div>
                    <div class="input-container"><input type={activeIcon ? "text" : "password"} name="password" onChange={(e) => hanldeInputChange(e)} value={userDeatails.password} placeholder='password' className='password-input' />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {activeIcon ? <IoIosEye /> : <IoIosEyeOff />}
                        </span>
                    </div>
                    <p className='register-navigate' onClick={goingToRegisterFrom}>If you don't have account please Register here </p>
                    <div><input type='submit' value="Submit" className='rigister-submit' /></div>
                </form>
            </div>
        </div>
    )
}

export default Login;
