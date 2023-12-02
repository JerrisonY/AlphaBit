import React from 'react'
import './LoginPage.css'
import { NavLink } from 'react-router-dom'

function LoginPage() {
  return (
    <div className='login-container'>
        <div className='login-left-c'>
            <div className='login-left-inner-c'>
                <img src="/images/logo.svg" alt="" />
                <span className='login-header'>Sign in to your account</span>
                <span>
                    <span className='gray'>Not a member? </span>
                    <NavLink className='trial' to='/' > Start a 14 day free trial</NavLink>
                </span>

                <div className='l-email-c'>
                    <span>Email address</span>
                    <input 
                        id='email'
                        name='email'
                        type="email" 
                        required
                    />
                </div>
                <div className="l-pass-c">
                    <span>Password</span>
                    <input 
                        id='password'
                        name='password'
                        type="password" 
                        required
                    />
                </div>
                
                <div className='forgot-pass-c'>
                    <div className='forgot-inner-c'>
                        <input 
                            type="checkbox"
                        />
                        <span>Remember me</span>
                    </div>
                    <NavLink className='forgot-pass' to='/'>Forgot password?</NavLink>
                </div>
                <button className='signin-btn'>Sign in</button>
                <span className='signin-cont'>Or continue with</span>
                <div className='signin-btn-c'>
                    <a className='twitter-btn' href='https://twitter.com/' target='_blank'>
                        <i class="fa-brands fa-twitter"></i> Twitter
                    </a>
                    <a className='git-btn' href='https://github.com/JerrisonY' target='_blank'>
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage