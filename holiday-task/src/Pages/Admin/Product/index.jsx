import React from 'react'
import { productContext } from '../../../Context/ProductContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function AdminProducts() {

    let { products, setProducts } = useContext(productContext)

    const navigate=useNavigate() 

    function handleAdminDetailPage(id){
        navigate(`/admin/admindetail/${id}`)
    }

    async function handleDelete(id){

        await axios.delete(`http://localhost:3000/flowers/${id}`)
        .then(res=>{
            let filtered=products.filter(product=>product.id!=id);
            setProducts(filtered)
        })

        

    }

    return (
        <div className='contain' style={{ margin: "10px auto" }}>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='t'>Id</th>
                        <th className='t'>Name</th>
                        <th className='t'>Type</th>
                        <th className='t'>Image</th>
                        <th className='t'>Color</th>
                        <th className='t'>Price</th>
                        <th className='t'>Sale</th>
                        <th className='t'>Details</th>
                        <th className='t'>Edit</th>
                        <th className='t'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr className='table' key={product.id}>
                                <td className='t'>{product.id}</td>
                                <td className='t'>{product.flower_name}</td>
                                <td className='t'>{product.soil_type}</td>
                                <td className='t'><img src={product.image} alt="flower" /></td>
                                <td className='t'>{product.color}</td>
                                <td className='t'>{product.price}</td>
                                <td className='t'>{product.sale ? "Sale" : "No"}</td>
                                <th className='t'>
                                    <button onClick={()=>handleAdminDetailPage(product.id)} className='admin-detail-btn'>Detail</button>
                                </th>
                                <th className='t'>
                                    <button className='admin-edit-btn' >Edit</button>
                                </th>
                                <th className='t'>
                                    <button onClick={()=>handleDelete(product.id)} className='admin-delete-btn'>Delete</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminProducts
