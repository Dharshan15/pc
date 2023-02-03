import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { fontSize } from '@mui/system';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        console.log(e.target.value);


        const { value, name } = e.target;
         console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user_Signup");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 9) {
            toast.error('password length greater 8', {
                position: "top-center",
            });
        } 
        else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history('/front')
                }
            }
        }

    }

    return (
        <>
        <div className='mainlogin'>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <div className='s1'>
                        <h1 className='text-center col-lg-10'>SIGN IN</h1>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" style={{width:'300px',height:'40px',fontSize:'25px',borderRadius:'30px'}} />
                            </Form.Group>
                            <br/>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" style={{width:'300px',height:'40px',fontSize:'25px',borderRadius:'30px'}}/>
                            </Form.Group>
                            <br/>
                            <Button variant="primary" className='col-lg-6' onClick={addData} type="submit" style={{fontSize:"18px",fontWeight:"bold",background:"red",color:"white",borderRadius:"50px",height:"40px",width:"110px",borderColor:"red"}}>
                                SUBMIT
                            </Button>
                            
                            <br/><br/>
                        </Form>
                        <Link to="/recoverpage"style={{color:'aqua',fontSize:'20px'}}>forgot password?</Link><br/><br/>
                        <Link to="/signup"style={{color:'aqua',fontSize:'20px'}}>Create account</Link>
                    </div>
                    </div>
                </section>
                <ToastContainer />
            </div>
            </div>
        </>
    )
}

export default Login;