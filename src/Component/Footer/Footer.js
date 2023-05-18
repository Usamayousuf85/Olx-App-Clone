import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="f12">
                <div className="f12a">
                    <section>
                        <span className='ulsp'>Popular Categories</span>
                        <ul><li><span>Cars</span></li><li><span>Flats for rent</span></li><li><span>Mobile Phones</span></li><li><span>Jobs</span></li></ul>
                    </section>
                    <section>
                        <span className='ulsp'>Trending Searches</span>
                        <ul><li><span>Bikes</span></li><li><span>Watches</span></li><li><span>Books</span></li><li><span>Dogs</span></li></ul>
                    </section>
                    <section>
                        <span className='ulsp'>About Us</span>
                        <ul><li><span>About EMPG</span></li><li><span>OLX Blog</span></li><li><span>Contact Us</span></li><li><span>OLX For Businesses</span></li></ul>
                    </section>
                    <section>
                        <span className='ulsp'>OLX</span>
                        <ul><li><span>Help</span></li><li><span>Sitemap</span></li><li><span>Terms of use</span></li><li><span>Privacy Policy</span></li></ul>
                    </section>
                    <section>
                        <span className='ulsp'>Follow us</span>
                        <div className="icon">
                            <img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="Facebook Logo" />
                            <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="Facebook Logo" />
                            <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="Facebook Logo" />
                            <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="Facebook Logo" />
                        </div>
                        <div className="btnapp">
                            <img style={{ marginRight: '0.5rem' }} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="App Store" />
                            <img style={{ marginRight: '0.5rem' }} src="	https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="Google Play" />
                            <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="App Gallery" />
                        </div>
                    </section>
                </div>
            </div>
            <div className="bot">
                <div className="bot1">
                <span>Free Classifieds in Pakistan</span>
                . © 2022 OLX CLONE
                </div>
            </div>
        </footer>
    )
}

export default Footer