import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const DeleteProduct = () => {
    const navigate = useNavigate()
    const id = useParams().id
    function deleteProduct(event){
		event.preventDefault()
		fetch(`http://127.0.0.1:8000/api/product-destroy/${id}/`,{
			method:'delete',
			headers:{
				'Content-Type':'application/json'
			}
		})
			.then(resp=>{
				if (resp.status === 204 ){
					navigate(`/products`)
				}
			})
	}
  return (
    <div classNameName="container mt-5">
    <div className="row justify-content-center ">
        <div className="col-lg-4 border rounded-2">
            <h2 className="mb-5 mt-3 text-center">Delete Product</h2>
            <form onSubmit={deleteProduct}>
                <div className="mb-3">
                  Are you sure you want to delete?
                </div>

                <a href={`/products`} type="" className="btn btn-outline-secondary mb-3">Back</a>
                <button type="submit" className="btn btn-outline-danger mb-3">Delete</button>
              </form>
        </div>
    </div>
  </div>
  )
}

export default DeleteProduct