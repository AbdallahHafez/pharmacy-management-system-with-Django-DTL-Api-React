import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerOrder = (props) => {
  const navigate = useNavigate()
  function deleteItem(id,pid){
    fetch(`http://127.0.0.1:8000/api/orderitem-destroy/${id}/`,{
      method:'delete',
      headers:{
        'Content-Type':'application/json'
      }
    })
      .then((resp)=>{
        if(resp.status === 204){
          navigate(`profile/${pid}`)
        }
      })
  }
  return (
    <section className="orders-table-section mb-5  border container rounded-3 py-4 mb-4">
    <div className="container d-flex justify-content-between">
      <h2 className="mb-4 text-success fw-bold">
        Order at: {props.order.created_at}
      </h2>
      <p >
       <span className="fw-bold">Total: </span> {props.order.total_price}$
      </p>
    </div>
    <div className="container border rounded-3 table-responsive">
    <table className="table table-hover  table-striped">
      <thead>
        <tr>
          <th scope="col">Medicine Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Controls</th>
        </tr>
      </thead>
      <tbody>
        {props.order.orderitems.map((item)=>{
            return  <tr key={props.order.id}>
                
                <td className='text-capitalize'>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total_price}</td>
                <td>
                  <form action="" onSubmit={()=>{deleteItem(item.id,props.order.customer.id)}}>
                    <button href="" className="btn btn-outline-danger">Delete</button>                    
                  </form>
                    

                </td>
            </tr>
        })}

      </tbody>
    </table>              
    </div>

  </section>  
  )
}

export default CustomerOrder