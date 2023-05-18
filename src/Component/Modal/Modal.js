import React, { useState, useEffect } from 'react';
import './Modal.css'
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaEnvelope, FaCopyright } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { signout } from '../../Store/Action';
import { firebase } from '../../Config/Firebase'

const Model = () => {
    const [show, setShow] = useState(false);
    const [Cuser, setCuser] = useState(null)
    const History = useHistory()
    const Dispatch = useDispatch()

    const toggle = () => setShow(!show);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user !== null) {
                console.log(user);
                setCuser({
                    photo: user.photoURL
                })
                // ...
            }
            else {
                // User is signed out
                // ...
            }
        })
    }, [])

    const Handlesubmit = (History) => {
        setCuser(null)
        Dispatch(signout(History))
    }

    // const Cuser = useSelector((state) => state.CurrentUser)
    // console.log(Cuser.displayName)


    return (
        <>
            <div className='mdl'>
                {Cuser ?
                    <>
                        <img width={30} src={Cuser.photo} alt="" />
                        {/* <span><button className='mdlbtno' onClick={() => Handlesubmit(History)}><span>Logout</span></button></span> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {/* Dropdown Button */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#"><span onClick={() => Handlesubmit(History)}>Logout</span></Dropdown.Item>
                                <Dropdown.Item href="#"><Link style={{ textDecoration: 'none', color: '#212529' }} to={'/Post'}><span>My Adds</span></Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </> :
                    <button className='mdlbtn' variant="primary" onClick={toggle}>
                        <span>Login</span>
                    </button>}
            </div>
            <div className='sell'>
                {Cuser ? <>
                    {/* <Link style={{ textDecoration: 'none' }} to={'/Sell'}><button className='mdlbtnl'><span>My item</span></button></Link> */}
                    <Link to={'/Sell'}>
                        <button className='sellbtn' variant="primary">
                            <img src="	https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
                            <div className="word">
                                <img src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg" alt="" />
                                <span>Sell</span>
                            </div>
                        </button>
                    </Link></> :
                    <button className='sellbtn' variant="primary" onClick={toggle}>
                        <img src="	https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
                        <div className="word">
                            <img src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg" alt="" />
                            <span>Sell</span>
                        </div>
                    </button>}
            </div>
            <Modal show={show} onHide={toggle}>
                <div>
                    <button className='close' onClick={toggle}>
                        <svg width={25} height={25} fillRule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024"><path d="M878.3 85.3L512 451.6 145.7 85.3H85.3v60.4L451.7 512 85.3 878.3v60.4h60.4L512 572.3l366.3 366.4h60.4v-60.4L572.4 512l366.3-366.3V85.3z"></path></svg>
                    </button>
                </div>
                <div className='m1'>
                    <img alt="OLX Logo" src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />
                    <span>WELCOME TO OLX</span>
                    <span>The trusted community of buyers and sellers.</span>
                </div>
                <div className='m2'>
                    <Link className='l1' style={{ textDecoration: 'none' }} to={'/Login'}>
                        <button>
                            <FaEnvelope size={25} style={{ marginRight: '0.6rem', marginBottom: '0.1rem', fill: '#002f34' }} />
                            <span>Continue with Email</span>
                        </button>
                    </Link>
                    <button>
                        <FcGoogle size={25} style={{ marginRight: '0.6rem', marginBottom: '0.1rem' }} />
                        <span>Continue with Google</span>
                    </button>
                    <button>
                        <BsFacebook size={25} style={{ marginRight: '0.6rem', marginBottom: '0.1rem' }} />
                        <span>Continue with Facebook</span>
                    </button>
                </div>
                <div className="copy">
                    <FaCopyright size={20} style={{ marginRight: '0.4rem', marginBottom: '0.1rem', fill: '#002f34' }} />
                    <span>Copyright </span>
                    <span style={{ marginLeft: '1px' }}>2022</span>
                </div>
            </Modal>
        </>
    )
}

export default Model