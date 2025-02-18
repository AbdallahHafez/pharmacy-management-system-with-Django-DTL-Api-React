import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CreateCustomer = () => {
	const navigate = useNavigate()
	function createCustomer(event){
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const newCustomer = Object.fromEntries(formData)
		fetch('http://127.0.0.1:8000/api/customer-create/',{
			method:'post',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(newCustomer)
		})
			.then(resp=>{
				if (resp.status === 201){
					navigate('/customers')
				}
			})
	}
  return (
    <div className="container mt-5">
    <div className="row justify-content-center ">
        <div className="col-lg-4 border rounded-2">
            <h2 className="mb-5 mt-3 text-center">Create Customer</h2>
            <form onSubmit={createCustomer} id='user-creation-form'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input name="address" type="text" className="form-control" id="address" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input name='mobile' type="text" className="form-control" id="phone" aria-describedby="emailHelp"/>
                </div>
                <a href='/customers' type="submit" className="btn btn-outline-secondary mb-3">Back</a>
                <button type="submit" className="btn btn-outline-success mb-3">Create</button>
              </form>
        </div>
    </div>
  </div>
  )
}

export default CreateCustomer