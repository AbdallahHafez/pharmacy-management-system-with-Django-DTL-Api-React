import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustomerDetail from './CustomerDetail'
import CustomerOrder from './CustomerOrder'

const CustomerProfile = () => {
  const id = useParams().id
  const navigate = useNavigate()
  const [customer,setCustomer]=useState({})
  const [orders,setOrders] = useState([])

  function fetchCustomer(){
    fetch(`http://127.0.0.1:8000/api/customer-detail/${id}/`)
      .then(resp=>{
        if (resp.status === 404){navigate('/customers')}
        return resp.json()
      })
      .then(data=>{
          setCustomer(data)
          setOrders(data.orders)
        })
      
  }
  console.log(customer)
  useEffect(()=>{fetchCustomer()},[])
  return (
  <main>

    <CustomerDetail customer={customer}  />

    <section className="orders-section mt-5">
      
      {orders.map((order)=>{
        return <CustomerOrder key={order.id} order={order} />
      })}
                            
    </section>
  </main>
  )
}

export default CustomerProfile