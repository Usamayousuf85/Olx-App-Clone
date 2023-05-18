import React from 'react'
import './Appbox.css'

const Appbox = () => {
    return (
        <div className='ab1'>
            <div className='ab2'>
                <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="OLX mobile app" />
            </div>
            <div className='ab3'>
                <div className="h1">
                    Try the OLX app
                </div>
                <div className="h2">
                    Buy, sell and find just about anything using the app on your mobile.
                </div>
            </div>
            <div className='b12'>
                <div className="blank"></div>
            </div>
            <div className="app">
                <div className="n1">
                    Get your app today
                </div>
                <div className="appbtn">
                    <img style={{ marginRight: '0.5rem' }} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="App Store" />
                    <img style={{ marginRight: '0.5rem' }} src="	https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="Google Play" />
                    <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="App Gallery" />
                </div>
            </div>
        </div>
    )
}

export default Appbox