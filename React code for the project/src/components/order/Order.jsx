import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate()
  const [order,setOrder] = useState()
  const id = useParams().id    
  function fetchOrder(){
    fetch(`http://127.0.0.1:8000/api/order/${id}/`)
      .then(resp=>resp.json())
      .then(data=>{
        
        setOrder(data)
        console.log(data)
      })
  }
  function completeOrder(e){
    e.preventDefault()
    fetch(`http://127.0.0.1:8000/api/order-update/${id}/`,{
      method:'put',
      headers:{
        'Content-Type':'application/json'
      }
    })
      .then(resp=>{
        if (resp.status ===200){
          navigate(`/order/${id}/`)
        }
      })
  }
  useEffect(()=>{fetchOrder()},[])
  if(order===undefined){
    return <div>loading..</div>
  }
  return (
    <main>
        <section className="orders-section">
            <section className="orders-table-section mt-5 border container rounded-3 py-4 mb-4">
                <div className="container d-flex justify-content-between ">
                <h2 className="mb-4 text-success fw-bold">
                    Order at: {order.created_at}
                </h2>
                <p className="text-success fw-bold">{order.customer.name}</p>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary btn-sm dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Status: 
                    </button>
                    { order.complete == true ?"Complete":"Pending"}
                    
                    
                    <ul className="dropdown-menu">
                    <li>
                        <form action="" onSubmit={completeOrder} method="post">
                            
                        <button type="submit" className="dropdown-item" href="#">Complete</button>
                        </form>
                    </li>
                    </ul>
                </div>
                <p><span className="fw-bold">Total:</span>421</p>
                </div>
                <div className="container border rounded-3 table-responsive">
                <table className="table table-hover  table-striped">
                <thead>
                    <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    { order.orderitems.map((item)=>{
                      return(
                          <tr>
                          <td>{item.product.name}</td>
                          <td>{item.product.price}</td>
                          <td className="d-flex column-gap-1">
                              <form action="">
                              <button className="btn-controll">&#43;</button>
                              </form>
                              {item.quantity}
                              <form className="" action="">
                              <button className="btn-controll">&#8722;</button>
                              </form>                  
                          </td>
                          <td>{item.total_price}</td>
                          </tr>
                      )
                    }) }

                </tbody>
                </table>              
                </div>

            </section>                             
        </section>
    </main>
  )
}

export default Order