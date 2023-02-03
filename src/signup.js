import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css'

const Register = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        phone_no: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, phone_no, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (phone_no === "") {
             toast.error('phone number field is requred',{
                position: "top-center",
            });
        }else if (phone_no.length < 10 || phone_no.length>10) {
                toast.error('enter a valid phone number',{
                   position: "top-center",
               });
        }else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 9) {
             toast.error('password length greater 8',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("user_Signup",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
        <div className='mainbox'>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <div className='s2'></div>
                    <center>
                        <h1 className='text-center col-lg-6'>SIGN UP</h1>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" style={{width:'300px',height:'40px',fontSize:'25px',borderRadius:'30px'}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" style={{width:'300px',height:'40px',fontSize:'25px',borderRadius:'30px'}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={getdata} name='phone_no' type="text" placeholder="phone number" style={{width:'300px',height:'40px',fontSize:'25px',borderRadius:'30px'}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" style={{width:'300px',height:'40px',fontSize:'25px',borderRadius:'30px'}}/>
                            </Form.Group>
                            <br/>
                            <Button className='submit' onClick={addData} type="submit"style={{background:"black",color:"lime",borderRadius:"50px",border:"6px solid lime", width:'150px',fontSize:'25px'}} > 
                                SUBMIT
                            </Button><br/>  
                            <Button className="loginbtn" variant="contained" style={{background:"black",color:"red",borderRadius:"50px",border:"6px solid red", width:'150px', fontSize:'25px'}} onClick={()=>{history("/login")}}>BACK</Button>
                        </Form>
                    </center>
                    </div>
                </section>
                <ToastContainer />
            </div>
            </div>
        </>
    )
}

export default Register;