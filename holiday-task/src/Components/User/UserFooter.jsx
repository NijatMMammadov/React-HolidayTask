import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

function UserFooter() {
  return (
    <div className='footer'>
      <hr  style={{marginTop:"100px"}}/>
      <div className='footer-top contain'>
        <div className='top-left'>
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
        </div>
        <div className='top-right'>
          <p>
            The floristry business has a significant market in the corporate and social event world, as <br /> flowers
          </p>
          <FacebookIcon></FacebookIcon>
          <TwitterIcon></TwitterIcon>
          <InstagramIcon></InstagramIcon>
          <LinkedInIcon></LinkedInIcon>
        </div>
      </div>
      <div className='footer-options'>
        <div className='options-left'>
          <div className='company'>
            <h4>
              Company
            </h4>
            <Link style={{ color: "#4f4f4f", textDecoration: "none", fontSize: "18px" }}>About us</Link>
            <Link style={{ color: "#4f4f4f", textDecoration: "none", fontSize: "18px" }}>Servcies</Link>
            <Link style={{ color: "#4f4f4f", textDecoration: "none", fontSize: "18px" }}>Contact us</Link>
          </div>
          <div className='account'>
            <h4>
              Account
            </h4>
            <Link style={{ color: "#4f4f4f", textDecoration: "none", fontSize: "18px" }}>My cart</Link>
            <Link style={{ color: "#4f4f4f", textDecoration: "none", fontSize: "18px" }}>Wisslist</Link>
            <Link style={{ color: "#4f4f4f", textDecoration: "none", fontSize: "18px" }}>Login/Register</Link>
          </div>
        </div>
        <div className='options-center'>
          <h4>
            Newletter
          </h4>
          <p>
            Subcribe to our newsletter to get more free tips. No Spam, Promise.
          </p>
          <input type="text" placeholder='Email' />

        </div>
        <div className='options-right'>
          <h4>
            Get in touch
          </h4>
          <div style={{margin:'10px auto '}}>
            <p>
              69 North Cleveland Street, Memphis,USA.
            </p>
            <p>
              (123) 8111 9210 - (012) 1111 6868
            </p>
            <p>
              Florisr@supportthem.com
            </p>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
          <p>
            Copyright ©2025 All rights reserved | This template is made with
          </p>
          <FavoriteIcon style={{color:"#F45D96",fontSize:"20px"}}></FavoriteIcon>
          <p>
            by 
          </p>
          <Link style={{color:"#F45D96", textDecoration:"none"}}>Colorlib</Link>
      </div>
    </div>
  )
}

export default UserFooter

// <Link to={"/basket"}>Basket</Link>
// <Link to={"/favorites"}>Favorites</Link>
// <Link to={"/detail"}>Detail</Link>
// <Link to={"/"}>Home</Link>