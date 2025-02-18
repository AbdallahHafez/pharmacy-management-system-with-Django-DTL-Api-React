import React from 'react'

const CustomerDetail = (props) => {
  return (
    <section className="container">
    
      <div className=" mt-4 fw-bold text-center ">
        <h2 className="customer-name mx-auto border py-2 rounded-2">{props.customer.name}</h2>
        <div className="mt-3">
          <a href={`/profile-delete/${props.customer.id}`} className="btn btn-outline-danger me-2">Delete</a>
          <a href={`/profile-update/${props.customer.id}`} className="btn btn-outline-success">Edit</a>
        </div>
      </div>
    
       <div className="row ">
        <div className="col-6 text-center">
          <p >
           <span className="fw-bold">Address:</span> <span>{props.customer.address}</span> 
          </p>
        </div>
        <div className="col-6 text-center">
          <p >
           <span className="fw-bold">Joined at:</span> <span>{props.customer.created_at}</span> 
          </p>
        </div>      
        <div className="col-6 text-center">
          <p >
           <span className="fw-bold">Mobile:</span> <span>{props.customer.mobile}</span> 
          </p>
        </div>
        <div className="col-6 text-center">
          <p >
           <span className="fw-bold">Orders:</span> <span>{props.customer.orders?props.customer.orders.length:0}</span> 
          </p>
        </div>                  
       </div>
    </section>
  )
}

export default CustomerDetail