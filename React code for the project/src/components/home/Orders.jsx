import React from 'react'
import Order from './Order'

const Orders = (props) => {
  return (
    <section className="orders-table-section mt-4 border container rounded-3 py-4 mb-4">
    <div className="container ">
      <h2 className="mb-4 text-success fw-bold">
        Recent Orders
      </h2>
    </div>
    <div className="container border rounded-3 table-responsive">
    <table className="table table-hover  table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Address</th>
          <th scope="col">Total</th>
          <th scope="col">Status</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        {props.orders.map((order)=>{
            return (
              <Order key={order.id} order={order} />                          
            )
        })}


      </tbody>
    </table>              
    </div>

  </section>
  )
}

export default Orders