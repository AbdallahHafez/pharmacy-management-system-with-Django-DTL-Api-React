import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products,setProducts] = useState([])
    const fetchProducts=()=>{
        fetch('http://127.0.0.1:8000/api/products/',{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                setProducts(data)
            })
    }
    useEffect(()=>{fetchProducts()},[])
  return (
    <main>
  
    <section className="customers-section mt-4">
      <div className="container">
       
        <div className="row">
          <div className="col text-center">
            <a href='product-create/' className="btn btn-outline-success fw-bold px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi me-2 bi-plus-square " viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
              New Product
            </a>
          </div>
        </div>
     
         <div className="container mt-5">
          <div className="row column-gap-5 justify-content-center row-gap-4">
            {products.map((product)=>{
                return (
                    <div className="col-lg-4  border rounded-2 d-flex align-items-center column-gap-4  pt-4 customer-card">
                    <div className="customer-card-left">
                        <span className=" bg-success text-white ">{product.name[0].toUpperCase()}</span>
                        
                    </div>
                    <div className="customer-card-right">
                        <p className="text-success text-capitalize fw-bold">{product.name}</p>
                        <p className="text-secondary">Price : {product.price}$</p>
                        <div className="mb-2">
                            <a href={`product-delete/${product.id}`} className="btn btn-outline-danger me-2">Delete</a>
                            <a href={`/product-update/${product.id}`} className="btn btn-outline-success me-2">Edit</a>
                            <a href={`orderitem-create/${product.id}`} className="btn me-2 btn-outline-secondary">
                            Order
                            </a>
                        </div>
                    </div>           
                    </div>                      
                )
            })}
                              
          </div>
         </div>
      </div>
    </section>

  </main>
  )
}

export default Products