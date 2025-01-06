import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

function UserNavbar() {
  const navigate = useNavigate()

  const goFavPage = () => {
    navigate("/favorites")
  }

  const goBasketPage = () => {
    navigate("/basket")
  }

  return (
    <>
      <div className='navbar contain'>
        <div className='nav-left'>
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
        </div>
        <div className='nav-right'>
          <div className='link'>
            <Link style={{ color: "black", textDecorationLine: "none" }}>HOME</Link>
            <Link style={{ color: "black", textDecorationLine: "none" }}>ABOUT</Link>
            <Link style={{ color: "black", textDecorationLine: "none" }}>SERVICES</Link>
            <Link style={{ color: "black", textDecorationLine: "none" }}>SHOP</Link>
            <Link style={{ color: "black", textDecorationLine: "none" }}>PAGES</Link>
            <Link style={{ color: "black", textDecorationLine: "none" }}>BLOG</Link>
            <Link style={{ color: "black", textDecorationLine: "none" }}>CONTACT</Link>
          </div>
          <div className='pages'>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={() => goFavPage()}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton onClick={() => goBasketPage()}>
              <ShoppingCartIcon />
            </IconButton>


          </div>
        </div>
      </div>
      <hr style={{ marginBottom: "100px" }} />
    </>
  )
}

export default UserNavbar
