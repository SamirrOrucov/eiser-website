import React from 'react'
import {Link} from 'react-router-dom'
import "./index.scss"
const NavTop = () => {
  return (
    <>
    <div className="nav_top_container">
        <div className="container">
            <div className="contact">
                <p>PHONE: +01 256 25 235</p>
                <span>|</span>
                <p>EMAIL: INFO@EISER.COM</p>
            </div>
            <div className="links">
                <Link>GIFT CARD</Link>
                <span>|</span>
                <Link>TRACK ORDER</Link>
                <span>|</span>
                <Link>CONTACT US</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default NavTop