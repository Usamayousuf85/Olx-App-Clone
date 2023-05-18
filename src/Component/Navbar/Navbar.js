import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bar'>
            <ul>
                <div>
                    <Link className='all' to={'/#'}> <li id='all'>ALL CATEGORIES<img src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg" alt="Dropdown arrow"></img></li></Link>
                </div>
                <Link to={'/#'}><li className='nav'>Mobile Phones</li></Link>
                <Link to={'/#'}><li className='nav'>Cars</li></Link>
                <Link to={'/#'}><li className='nav'>Motorcycles</li></Link>
                <Link to={'/#'}><li className='nav'>Houses</li></Link>
                <Link to={'/#'}><li className='nav'>TV - Video - Audio</li></Link>
                <Link to={'/#'}><li className='nav'>Tablets</li></Link>
                <Link to={'/#'}><li className='nav'>Land & Plots</li></Link>
            </ul>
        </div>
    )
}

export default Navbar