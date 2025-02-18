import React from 'react'

const Order = ({order}) => {
  return (
    <tr>              
        <td>{order.customer.name}</td>
        <td>{order.customer.mobile}</td>
        <td>{order.customer.address}</td>
        <td>{order.total_price}</td>
        <td>{order.complete === true ? "Complete" : "Pending"}</td>
        <td>
            <a href={`order/${order.id}`} className="text-success">View</a>
        </td>
    </tr>  
  )
}

export default Order