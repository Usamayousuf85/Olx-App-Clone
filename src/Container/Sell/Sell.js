import React from 'react'
import { Link} from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import './Sell.css'

const Sell = () => {
    return (
        <>
            <header>
                <div className="first4">
                    <div>
                        <Link to={'/'}><FaArrowLeft fill='000' size={25} />
                            <svg style={{ marginLeft: '20px' }} width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Sell