import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { basketContext } from '../../../Context/BasketContext';
import { useContext } from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function Basket() {
  let { basket, setBasket } = useContext(basketContext)

  let [totalPrice, setTotalPrice] = useState(0)

  function handleDecrease(basketprod) {
    if (basketprod.count > 1) {
      basketprod.count--
      setBasket([...basket])
    } else {
      let filtered = basket.filter(element => element.id != basketprod.id)
      setBasket(filtered)
    }
  }
  function handleIncrease(basketprod) {
    basketprod.count++
    setBasket([...basket])
  }
  function handleDelete(basketprod) {
    let filtered = basket.filter(element => element.id != basketprod.id)
    setBasket(filtered)
  }
  const navigate = useNavigate();
  const goToBack = () => {
    navigate('/')
  }

  function calcTotalPrice() {
    let total = basket.reduce((sum, basketprod) => sum + (basketprod.price * basketprod.count), 0)
    setTotalPrice(total)
  }

  useEffect(() => {
    calcTotalPrice()
  }, [basket])

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Basket</h1>
      <table className='table contain'>
        <thead>
          <tr>
            <th className='t'>Id</th>
            <th className='t'>Name</th>
            <th className='t'>Type</th>
            <th className='t'>Image</th>
            <th className='t'>Color</th>
            <th className='t'>Sale</th>
            <th className='t'>Price</th>
            <th className='t'>Total Price</th>
            <th className='t'>Decrease</th>
            <th className='t'>Count</th>
            <th className='t'>Increase</th>
            <th className='t'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            basket.map(basketprod => (
              <tr className='table' key={basketprod.id}>
                <td className='t'>{basketprod.id}</td>
                <td className='t'>{basketprod.flower_name}</td>
                <td className='t'>{basketprod.soil_type}</td>
                <td className='t'><img src={basketprod.image} alt="flower" /></td>
                <td className='t'>{basketprod.color}</td>
                <td className='t'>{basketprod.sale ? "Sale" : "No"}</td>
                <td className='t'>{basketprod.price}</td>
                <td className='t'>{(basketprod.count * basketprod.price).toFixed(2)}</td>
                <th className='t'>
                  <IconButton onClick={() => handleDecrease(basketprod)}><RemoveIcon /></IconButton>
                </th>
                <th className='t'>{basketprod.count}</th>
                <th className='t'>
                  <IconButton onClick={() => handleIncrease(basketprod)}><AddIcon /></IconButton>
                </th>
                <th className='t'>
                  <IconButton onClick={() => handleDelete(basketprod)}> <DeleteIcon /></IconButton>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
      <span style={{ margin: "70px", fontSize: "18px" }}>
        <b>Total Price : {totalPrice.toFixed(2)}</b>
      </span>
      <br />
      <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "10px 18px", margin: "10px 70px", borderRadius: "10px", cursor: "pointer" }} onClick={goToBack}>GO to Home Page</button>
    </>
  )
}

export default Basket


// < div style = {{ margin: "200px", textAlign: "center" }}>
//           <h1>Basketdə Məhsulunuz Yoxdu !</h1>
//           <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "10px 18px", margin: "20px", borderRadius: "10px", cursor: "pointer" }} onClick={goToBack}>GO to Home Page</button>
//         </ >