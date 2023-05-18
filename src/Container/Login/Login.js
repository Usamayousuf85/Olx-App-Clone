import React, { useRef } from 'react'
import './Login.css'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import { login_user } from '../../Store/Action';
import { useDispatch } from 'react-redux';

const Login = () => {
  const emailref = useRef(null)
  const passwordref = useRef(null)
  const History = useHistory()
  const Dispatch = useDispatch()

  return (
    <>
      <header>
        <div className="first1">
          <div>
            <Link to={'/'}><FaArrowLeft fill='000' size={25} />
              <svg style={{ marginLeft: '20px' }} width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
            </Link>
          </div>
        </div>
      </header>
      <div className="box01">
        <img alt="OLX Logo" src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />
        <div className="form">
          <div className='heading'>
            <h5>WELCOME TO OLX</h5>
            <h5 className='sp2'>The trusted community of buyers and sellers.</h5>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder='Email' ref={emailref} />
          </div>
          <div>
            <input type="password" placeholder='Password' ref={passwordref} />
          </div>
          <button onClick={() => Dispatch(login_user(emailref, passwordref, History))} className='login02'>Login</button>
          <Link to='/Signup' className="ida">I dont have'n account!</Link>
        </div>
      </div>
    </>
  )
}

export default Login
