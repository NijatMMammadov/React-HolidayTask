import React, { useContext } from 'react'
import { favoritesContext } from '../../../Context/FavoritesContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"


function Favorites() {

  let { favorites, setFavorites } = useContext(favoritesContext)
  const navigate = useNavigate();
  const goToBack = () => {
    navigate('/')
  }

  function handleDeleteFav(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Remove from Favorites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
          timer:"1500"
        });
        let deleteFavorite = favorites.filter(favorite => favorite.id !== id)
    setFavorites(deleteFavorite)
      }
    });
    
  }

  return (
    <>
      <div className='product-cards contain'>
        {
          favorites.length == 0 ? (
            <div style={{ textAlign: "center" }}>
              <h1>Favoritesdə Məhsulunuz Yoxdu !</h1>
              <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "10px 18px", margin: "20px", borderRadius: "10px", cursor:"pointer" }} onClick={goToBack}>GO to Home Page</button>
            </div>
          ) :
            favorites.map(favorite => (
              <Card key={favorite.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={favorite.image} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title style={{ fontSize: "24px", padding: "10px 0px " }}>{favorite.flower_name}</Card.Title>
                  <Card.Text style={{ fontSize: "20px" }}>
                    {favorite.price} $
                  </Card.Text>
                  <div className='card-icons'>
                    <IconButton onClick={() => handleDeleteFav(favorite.id)} > <HeartBrokenIcon style={{ color: "red", fontSize: "28px" }} /></IconButton>
                    <IconButton> <ShoppingCartIcon style={{ color: "blue", fontSize: "28px" }} /></IconButton>
                    <Button className='prod-btn'>Detail</Button>
                  </div>
                </Card.Body>
              </Card>
            ))
        }
      </div>
      
    </>
  )
}

export default Favorites

