import React from 'react'
import './LoginPage.css'

function LoginPage() {
  return (
    <div className='login-container'>
        <div className='login-left-c'>
            <div className='login-left-inner-c'>
                <img src="/images/logo.svg" alt="" />
                <span className='login-header'>Sign in to your account</span>
                <span>
                    <span>Not a member? </span>
                    <span> Start a 14 day free trial</span>
                </span>

                <span>Email Address</span>
                <input 
                    id='email'
                    name='email'
                    type="email" 
                    required
                />
                <span>Password</span>
                <input 
                    id='password'
                    name='password'
                    type="password" 
                    required
                />
                <div className='forgot-pass-c'>
                    <div>
                        <input 
                            type="checkbox"
                        />
                        <span>Remember me</span>
                    </div>
                     <span className='forgot-pass'>Forgot password?</span>
                </div>
                <button>Sign in</button>
                <span>Or continue with</span>
                <div>
                    <button>Twitter</button>
                    <button>GitHub</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage