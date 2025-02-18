import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const CreateOrderItem = () => {
	const navigate = useNavigate()
    const id = useParams().id
	function createOrderItem(event){
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const newProduct = Object.fromEntries(formData)
		fetch(`http://127.0.0.1:8000/api/orderitem-create/${id}/`,{
			method:'post',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(newProduct)
		})
			.then(resp=>{
				if (resp.status === 200){
					navigate('/products')
				}
			})
	}
  return (
    <div className="container mt-5">
    <div className="row justify-content-center ">
        <div className="col-lg-4 border rounded-2">
            <h2 className="mb-5 mt-3 text-center">Create Product</h2>
            <form onSubmit={createOrderItem} id='user-creation-form'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">usercode</label>
                  <input name='usercode' type="number" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Quantity</label>
                  <input name='quantity' type="number" className="form-control" id="price" aria-describedby="emailHelp"/>
                </div>
                <a href='/products' type="submit" className="btn btn-outline-secondary mb-3">Back</a>
                <button type="submit" className="btn btn-outline-success mb-3">Create</button>
              </form>
        </div>
    </div>
  </div>
  )
}

export default CreateOrderItem