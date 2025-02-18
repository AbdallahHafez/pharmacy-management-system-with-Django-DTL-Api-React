import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CreateProduct = () => {
	const navigate = useNavigate()
	function createProduct(event){
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const newProduct = Object.fromEntries(formData)
		fetch('http://127.0.0.1:8000/api/product-create/',{
			method:'post',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(newProduct)
		})
			.then(resp=>{
				if (resp.status === 201){
					navigate('/products')
				}
			})
	}
  return (
    <div className="container mt-5">
    <div className="row justify-content-center ">
        <div className="col-lg-4 border rounded-2">
            <h2 className="mb-5 mt-3 text-center">Create Product</h2>
            <form onSubmit={createProduct} id='user-creation-form'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input name='price' type="number" className="form-control" id="price" aria-describedby="emailHelp"/>
                </div>
                <a href='/products' type="submit" className="btn btn-outline-secondary mb-3">Back</a>
                <button type="submit" className="btn btn-outline-success mb-3">Create</button>
              </form>
        </div>
    </div>
  </div>
  )
}

export default CreateProduct