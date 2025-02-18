import React from 'react'

const Customer = (props) => {
  return (
    <div className="col-lg-3  border rounded-2 d-flex align-items-center column-gap-4  pt-4 customer-card">
        <div className="customer-card-left">
        <span className=" bg-success text-white ">{props.customer.name[0].toUpperCase()}</span>
        <p className="fw-bold">code: {props.customer.id}</p>
        </div>
        <div className="customer-card-right">
        <p className="text-success fw-bold text-capitalize">{props.customer.name}</p>
        <p className='text-capitalize'>{props.customer.address}</p>
        <p className="text-secondary">Since : {props.customer.created_at}</p>
        <a href={`/profile/${props.customer.id}`} className="d-block mb-2">See more details &#8594;</a>
        </div>           
    </div>
  )
}

export default Customer