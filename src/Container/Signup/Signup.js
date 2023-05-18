import React, { useRef, useState } from 'react'
import './Signup.css'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import { create_user } from '../../Store/Action';
import { storage } from '../../Config/Firebase'

const Signup = () => {
  const nameref = useRef(null)
  const emailref = useRef(null)
  const passwordref = useRef(null)
  const History = useHistory()
  const [Url, setUrl] = useState([]);

  const Image_upload = (e) => {
    const random = new Date().getTime().toString()
    const image = e.target.files[0]
    console.log(image)
    var storageRef = storage.ref('ProfilePic');
    storageRef.child(image.name + random).put(image).then((data) => {
      data.ref.getDownloadURL().then((URL) => {
        console.log(URL)
        setUrl((prevState) => [...prevState, URL]);
      })
    })
  }
  console.log(Url)


  return (
    <>
      <header>
        <div className="first2">
          <div>
            <Link to={'/Login'}><FaArrowLeft fill='000' size={25} /></Link>
            <Link to={'/'}>
              <svg style={{ marginLeft: '20px' }} width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
            </Link>
          </div>
        </div>
      </header>
      <div className="box02">
        <img alt="OLX Logo" src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />
        <div className="form001">
          <div className='heading1'>
            <h6>WELCOME TO OLX</h6>
            <h6 className='sp3'>The trusted community of buyers and sellers.</h6>
          </div>
          <div>
            <input type="file" onChange={(e) => Image_upload(e)} />
          </div>
          <div>
            <input type="name" name="name" placeholder='Enter Your Name' ref={nameref} />
          </div>
          <div>
            <input type="email" name="email" placeholder='Enter Your Email' ref={emailref} />
          </div>
          <div>
            <input type="password" placeholder='Enter Your Password' ref={passwordref} />
          </div>
          <button className='login03' onClick={() => create_user(nameref, emailref, passwordref, Url, History)}>Register</button>
          {/* <Link to='/Login' className="idam"></Link> */}
        </div>
      </div>
    </>
  )
}

export default Signup