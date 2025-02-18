import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateProduct = () => {
  const id = useParams().id
	const navigate = useNavigate()

	function updateProduct(event){
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData)
		fetch(`http://127.0.0.1:8000/api/product-update/${id}/`,{
			method:'put',
			headers:{
				'Content-Type':'application/json'

			},
			body:JSON.stringify(data)
		})
			.then(resp=>{
				if (resp.status === 200 ){
					navigate(`/products`)
				}
			})
	}

  return (
    <div className="container mt-5">
    <div className="row justify-content-center ">
        <div className="col-lg-4 border rounded-2">
            <h2 className="mb-5 mt-3 text-center">Update Customer</h2>
            <form onSubmit={updateProduct} id='user-creation-form'>
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

export default UpdateProduct