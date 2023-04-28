import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <div>
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div>
            <h3 className='text__title'>Contact Info</h3>
            <p >Tailornova</p>
            <p>1900 South Norfolk Street, Suite 350</p>
            <p>San Mateo, CA 94403</p>
            <p>help@tailornova.com</p>
          </div>
          <div>
            <h3 className='text__title'>COMPANY</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Affiliate Terms</a></li>
              <li><a href="#">Terms&Conditions</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text__title'>SOLUTIONS</h3>
            <ul>
              <li><a href="#">Technology</a></li>
            </ul>
          </div>
          <div className="footer__follow-us">
          <h3 className='text__title'>FOLLOW US</h3>
          <a className='footer__icon' href="#"><BsFacebook /></a>
          <a className='footer__icon' href="#"><AiFillGoogleCircle /></a>
          <a className='footer__icon' href="#"> <BsTwitter/></a>
        </div>
        </div>
       
      </div>
    </footer>
    </div>
  )
}

export default Footer