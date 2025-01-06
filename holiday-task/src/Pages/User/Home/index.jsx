import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useContext } from 'react';
import { productContext } from '../../../Context/ProductContext';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { favoritesContext } from '../../../Context/FavoritesContext';
import { basketContext } from '../../../Context/BasketContext';
import Swal from "sweetalert2"


function Home() {

  let { products } = useContext(productContext)
  let { favorites, setFavorites } = useContext(favoritesContext)
  let { basket, setBasket } = useContext(basketContext)

  const navigate = useNavigate()

  function handleDetailPage(id) {
    navigate(`/detail/${id}`)
  }

  function handleAddFavorites(product) {
    let findFavorite = favorites.find(favorite => favorite.id == product.id)
    if (findFavorite) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Məhsul Favorites`də Mövcuddur!",
        timer:"2000"
      });
    } else {
      Swal.fire({
        title: "Add to Favorites",
        icon: "success",
        draggable: true,
        timer:"1500"
      });
      setFavorites([...favorites, product])
    }
  }
  function handleAddBasket(product) {
    let findBasket = basket.find(basketpro => basketpro.id == product.id)
    if (findBasket) {
      findBasket.count++
      setBasket([...basket])
    } else {
      Swal.fire({
        title: "Add to Basket",
        icon: "success",
        draggable: true,
        timer:"1500"
      });
      setBasket([...basket, { ...product, count: 1 }])
      
    }
  }

  return (
    <>
      <main>
        <section id='hero'>
          <div className='hero'>
            <div className='hero-content'>
              <p>
                FRESH FLOWER & GIFT SHOP
              </p>
              <h3>
                Making beautiful flowers a part of your life
              </h3>
              <button className='hero-button'>SHOP NOW</button>
            </div>
          </div>
        </section>

        <section id='features'>
          <div className="features contain">
            <div className='feature-item'>
              <div className='feature-icon'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="" />
              </div>
              <div className='feature-title'>
                <h3>
                  100% Freshness
                </h3>
                <p>
                  Most people are unaware of the less common flower
                </p>
              </div>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="" />
              </div>
              <div className='feature-title'>
                <h3>
                  Made by artist
                </h3>
                <p>
                  Most people are unaware of the less common flower
                </p>
              </div>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="" />
              </div>
              <div className='feature-title'>
                <h3>
                  Own courier
                </h3>
                <p>
                  Most people are unaware of the less common flower
                </p>
              </div>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png" alt="" />
              </div>
              <div className='feature-title'>
                <h3>
                  100% Freshness
                </h3>
                <p>
                  Most people are unaware of the less common flower
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='categories'>
          <div className='categories contain'>
            <div className='category-card'>
              <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg" alt="" />
              <div className='category-title'>
                <h4>
                  Fresh Flower
                </h4>
                <span>
                  ( 25 items)
                </span>
              </div>
            </div>
            <div className='category-card'>
              <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg" alt="" />
              <div className='category-title'>
                <h4>
                  Succulent plants
                </h4>
                <span>
                  ( 162 items)
                </span>
              </div>
            </div>
            <div className='category-card'>
              <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg" alt="" />
              <div className='category-title'>
                <h4>
                  Cactus plants
                </h4>
                <span>
                  ( 58 items)
                </span>
              </div>
            </div>
            <div className='category-card'>
              <img src="https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg" alt="" />
              <div className='category-title'>
                <h4>
                  Funiture tree
                </h4>
                <span>
                  ( 25 items)
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id='about'>
          <div className='about contain'>
            <div className='about-title'>
              <p>ABOUT US</p>
              <h3>
                We provide all <br /> kinds of fresh flower services
              </h3>
            </div>
            <div className='about-desc'>
              <p>
                For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.
              </p>
            </div>

          </div>
        </section>

        <section id='contact'>
          <div className='contact contain'>
            <div className='contact-video'>
              <img src="https://preview.colorlib.com/theme/florist/img/about/about-video.jpg" alt="" />
              <PlayCircleOutlineIcon style={{ fontSize: "100px" }} className='video-icon'></PlayCircleOutlineIcon>
            </div>
            <div className='contact-content'>
              <p style={{ color: "#F45D96", fontSize: "18px", fontWeight: "500" }}>
                SLOV FLOWERS’ FLORAL INSIGHTS
              </p>
              <h3>
                Dried flowers are having a renaissance
              </h3>
              <p>
                This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to “extend the season” beyond the last frost.
              </p>
              <button>CONTACT US</button>
            </div>
          </div>
        </section>

        <section id='product'>
          <div className='product contain'>
            <p style={{ color: "#F45D96", fontSize: "24px" }}>
              Our flower
            </p>
            <h3>
              New Arrivals
            </h3>
            <div className='flowers'>
              <p>
                All
              </p>
              <p>
                Bouquet
              </p>
              <p>
                Flower box
              </p>
              <p>
                Flower shelf
              </p>
              <p>
                Basket of flower
              </p>
              <p>
                Gift combos
              </p>
            </div>
            <div className='product-cards'>
              {
                products.map(product => (
                  <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img onClick={() => handleDetailPage(product.id)} style={{ cursor: "pointer" }} src={product.image} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title style={{ fontSize: "24px", padding: "10px 0px " }}>{product.flower_name}</Card.Title>
                      <Card.Text style={{ fontSize: "20px" }}>
                        {product.price} $
                      </Card.Text>
                      <div className='card-icons'>
                        <IconButton onClick={() => handleAddFavorites(product)}> <FavoriteBorderIcon style={{ color: "red", fontSize: "28px" }} /></IconButton>
                        <IconButton onClick={() => handleAddBasket(product)}> <ShoppingCartIcon style={{ color: "blue", fontSize: "28px" }} /></IconButton>
                        <Button onClick={() => handleDetailPage(product.id)} className='prod-btn'>Detail</Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))

              }
            </div>
          </div>
        </section>

        <section id='call'>
          <div className="call">
            <div className='call-content'>
              <p>
                CUSTOM FLOWER
              </p>
              <h3>
                Let our flowers make <br />
                your party more perfect.
              </h3>
              <span className='call-btns'>
                <button className='btn-order'>ORDER NOW</button>
                <button className='btn-contact'>CONTACT US</button>
              </span>
            </div>
          </div>
        </section>

        <section id='blog'>
          <div className='blog contain'>
            <div className='blog-title'>
              <div className='blog-left'>
                <p>
                  LASTES POSTS
                </p>
                <h3>
                  FLORIST TRICKS
                </h3>
              </div>
              <div className='blog-right'>
                <button className='blog-btn'>VIEW ALL POSTS</button>
              </div>
            </div>
            <div className='blog-cards'>
              <div className='blog-card'>
                <div className='blog-card-image'>
                  <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-1.jpg" alt="" />
                  <span className='trend'>
                    TREND NEWS
                  </span>
                </div>
                <div className='blog-card-info'>
                  <h4>
                    8 Romantic Gifts to Celebrate Your Wedding Anniversary
                  </h4>
                  <p>
                    Flowers have a language all their own. In Victorian times, receiving a…
                  </p>
                  <p style={{ color: "#4f4f4f" }}>
                    MAY 22, 2020
                  </p>
                </div>
              </div>
              <div className='blog-card'>
                <div className='blog-card-image'>
                  <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-2.jpg" alt="" />
                  <span className='trend'>
                    TIPS & IDEA
                  </span>
                </div>
                <div className='blog-card-info'>
                  <h4>
                    Red Rose - Flower of love of Greek Mythology
                  </h4>
                  <p>
                    Flowers have a language all their own. In Victorian times, receiving a…
                  </p>
                  <p style={{ color: "#4f4f4f" }}>
                    MAY 22, 2020
                  </p>
                </div>
              </div>
              <div className='blog-card'>
                <div className='blog-card-image'>
                  <img src="https://preview.colorlib.com/theme/florist/img/blog/blog-3.jpg" alt="" />
                  <span className='trend'>
                    DIY & CRAFTS
                  </span>
                </div>
                <div className='blog-card-info'>
                  <h4>
                    Beautiful Mandalas Made From Flowers by Kathy Klein
                  </h4>
                  <p>
                    Flowers have a language all their own. In Victorian times, receiving a…
                  </p>
                  <p style={{ color: "#4f4f4f" }}>
                    MAY 22, 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='statement'>
          <div className='statement'>
            <div className='statement-content'>
              <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" />
              <p>
                “I just wanted to say thank you for making such gorgeous arrangements for our
                birthday celebration. I couldn’t get over how perfect they were for the
                party. You did a fantastic job, and I appreciate it very much”
              </p>
              <span>
                <p style={{ color: "#252525" }}>
                  Alejandro Houston
                </p>
                <p style={{ fontSize: "16px" }}>
                  Businessman
                </p>
              </span>
            </div>
          </div>
          <div className='statement2'>
          </div>
        </section>

        <section id='instagram'>
          <div className='instagram'>
            <div className='box'>
              <img src="https://preview.colorlib.com/theme/florist/img/instagram/insta-1.jpg" alt="" />
              <div className='box-content'>
                <InstagramIcon style={{ color: "#F45D96" }}></InstagramIcon>
                <p>
                  Follow Us
                </p>
                <p>
                  @florist
                </p>
              </div>
            </div>
            <div className='box'>
              <img src="https://preview.colorlib.com/theme/florist/img/instagram/insta-2.jpg" alt="" />
              <div className='box-content'>
                <InstagramIcon style={{ color: "#F45D96" }}></InstagramIcon>
                <p>
                  Follow Us
                </p>
                <p>
                  @florist
                </p>
              </div>
            </div>
            <div className='box'>
              <img src="https://preview.colorlib.com/theme/florist/img/instagram/insta-3.jpg" alt="" />
              <div className='box-content'>
                <InstagramIcon style={{ color: "#F45D96" }}></InstagramIcon>
                <p>
                  Follow Us
                </p>
                <p>
                  @florist
                </p>
              </div>
            </div>
            <div className='box'>
              <img src="https://preview.colorlib.com/theme/florist/img/instagram/insta-4.jpg" alt="" />
              <div className='box-content'>
                <InstagramIcon style={{ color: "#F45D96" }}></InstagramIcon>
                <p>
                  Follow Us
                </p>
                <p>
                  @florist
                </p>
              </div>
            </div>
            <div className='box'>
              <img src="https://preview.colorlib.com/theme/florist/img/instagram/insta-5.jpg" alt="" />
              <div className='box-content'>
                <InstagramIcon style={{ color: "#F45D96" }}></InstagramIcon>
                <p>
                  Follow Us
                </p>
                <p>
                  @florist
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home




