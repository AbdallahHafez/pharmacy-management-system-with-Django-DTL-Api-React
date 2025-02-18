import React, { useState } from 'react'
import Reports from './Reports'
import Orders from './Orders'
import { useEffect } from 'react'
const Home = () => {
	const [orders,setOrders] = useState([])
	const [todayInfo,setTodayInfo] = useState(
		{newCustomers:0,customers:0,orders:0,money:0}
	)
	function getTodayData(){
			fetch('http://127.0.0.1:8000/api/today/',{
				method:'get',
				headers:{
					'Content-Type':'application/json'
				}
			})
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data.data.orders)
					setOrders(data.data.orders)
					setTodayInfo({
						newCustomers:data.data.new_customers_count,
						customers:data.data.todays_orders_count,
						orders:data.data.todays_orders_count,
						money:data.data.today_money
					})
				})
		}
		useEffect(()=>{getTodayData()},[])
	
  return (
  <main>

    <Reports  today={todayInfo}/>
    <Orders orders={orders}/>   

  </main>
  )
}

export default Home