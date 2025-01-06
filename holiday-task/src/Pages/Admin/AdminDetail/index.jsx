import React, { useContext } from 'react'
import { productContext } from '../../../Context/ProductContext'
import { useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AdminDetail() {

  let { products} = useContext(productContext)
  let { id } = useParams()
  let prod = products.find(item => item.id == id)

  if (!prod) {
    return <h2 style={{ textAlign: "center", color: "red" }}>Product not found</h2>
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "36px", marginBottom: "100px" }}>
        Admin Details Page
      </h1>
      {
        <Card style={{ width: '18rem', margin: "30px auto", fontSize: "18px", }}>
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title><b> Name : {prod.flower_name}</b></Card.Title>
            <Card.Text>
              <b></b>{prod.oil_type}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item> <b>Season : </b> {prod.bloom_season}</ListGroup.Item>
            <ListGroup.Item> <b>Color : </b> {prod.color}</ListGroup.Item>
            <ListGroup.Item> <b>Sale : </b>{prod.sale ? "Yes" : "No"}</ListGroup.Item>
            <ListGroup.Item> <b>Price :</b> {prod.price}</ListGroup.Item>
          </ListGroup>
        </Card>
      }
    </div>
  )
}

export default AdminDetail
