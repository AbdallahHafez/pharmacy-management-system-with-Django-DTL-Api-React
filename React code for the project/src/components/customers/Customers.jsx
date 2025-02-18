import React, { useEffect, useState } from 'react'
import Create from './Create'
import Customer from './Customer'


const Customers = () => {
  const [customers,setCustomers] = useState([])

	const fetchAllCustomers =()=>{
		fetch('http://127.0.0.1:8000/api/customers/',{
			method:'get',
			headers:{
				'Content-Type':'application/json'
			}
		})
			.then((resp)=>resp.json())
			.then(data=>{
				console.log(data)
				setCustomers(data)
			})
	}

	useEffect(()=>{fetchAllCustomers()},[])
  return (
    <main>
    <section className="customers-section mt-4">
        <div className="container">
            <Create/>
            <div className="container mt-5">
            <div className="row column-gap-5 justify-content-center row-gap-4">

						{customers.map((customer)=>{
							return (
								<Customer key={customer.id} customer={customer} />
							)
						})}

            </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default Customers