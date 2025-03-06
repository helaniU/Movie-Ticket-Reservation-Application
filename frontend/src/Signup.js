import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className="bg-image vh-100 d-flex align-items-center">
        {/* Left Side: Description */}
        <div className="w-50 text-white text-start px-5">
            <h1 className="logo" style={{color:'orange'}}><i className='bx bx-camera-movie'></i> CinePass</h1>
            <div class="text-sci">
                <h2>WELCOME!</h2>
                <h2 style={{color:'wheat'}}>BOOK YOUR TICKETS</h2>
                <p>Self,secure,reliable ticketing.Your ticket to live entertainment By moviet tickets in advanced,find movie times watch trailers,
                    read movie reviews and much more </p>
                <div class="social-icons">
                    <a href="#" ><i class='bx bxl-linkedin'></i></a>
                    <a href="#" ><i class='bx bxl-facebook'></i></a>
                    <a href="#" ><i class='bx bxl-instagram'></i></a>
                    <a href="#" ><i class='bx bxl-twitter'></i></a>
                </div>
            </div>
        </div>

    {/* Right Side: Login Form */}
    <div className="signup-container p-4 bg-white rounded w-75" style={{backgroundColor:'wheat'}}>
      <div className='rounded p-3 w-30' style={{backgroundColor:'wheat'}}>
        <h2 className="d-flex justify-content-center" style={{ fontWeight: 'bolder' }}>
            Sign-Up
        </h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    <strong>Sign Up</strong>
                </button>
                <div className='d-flex justify-content-center'>
                    <p>You Already Have an Account</p>
                </div>
                <Link to="/" className='btn btn-default border w-100  text-decoration-none'
                style={{ backgroundColor: 'black', color: 'white' }}>
                    <strong>Log In</strong>
                </Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup