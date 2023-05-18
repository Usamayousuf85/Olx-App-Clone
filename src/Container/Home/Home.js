import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/Navbar/Navbar'
import Ads from '../../Component/Ads/Ads'
import Appbox from '../../Component/Appbox/Appbox'
import Footer from '../../Component/Footer/Footer'
import img from '../../Assets/vivo.jpg'

const Home = () => {

    return (
        <div>
            <Header />
            <Navbar />
            <div className='img'>
                <img src="https://images.olx.com.pk/thumbnails/245178240-800x600.webp" alt="" />
            </div>
            <div className='sec'></div>
            <span id='fresh'>Fresh recommendations</span>
            <div className="item">
                <div className="ads">
                    <Ads />
                </div>
            </div>
            <div className="loadbtn">
                <button><span>Load more</span></button>
            </div>
            <div className='img1'>
                <Link to={{ pathname: 'https://www.tecno-mobile.com/pak/phones-list?categoryId=171&seriesId=155&gclid=Cj0KCQjwreT8BRDTARIsAJLI0KJVtZzdkl4BE1Y_DoJwY3miN3QSX7990KFwVp8Cq-ugzg8Ga1j659QaAk72EALw_wcB#/' }} target="_blank">
                    <img src={img} alt="" />
                </Link>
            </div>
            <Appbox />
            <Footer />
        </div>
    )
}


export default Home