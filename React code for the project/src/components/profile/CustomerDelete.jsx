import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const CustomerDelete = () => {
    const navigate = useNavigate()
    const id = useParams().id
    function deleteCustomer(event){
		event.preventDefault()
		fetch(`http://127.0.0.1:8000/api/customer-destroy/${id}/`,{
			method:'delete',
			headers:{
				'Content-Type':'application/json'
			}
		})
			.then(resp=>{
				if (resp.status === 204 ){
					navigate(`/customers`)
				}
			})
	}
  return (
    <div class="container mt-5">
    <div class="row justify-content-center ">
        <div class="col-lg-4 border rounded-2">
            <h2 class="mb-5 mt-3 text-center">Delete Customer</h2>
            <form onSubmit={deleteCustomer}>
                <div class="mb-3">
                  Are you sure you want to delete 
                </div>

                <a href={`/profile/${id}`} type="" class="btn btn-outline-secondary mb-3">Back</a>
                <button type="submit" class="btn btn-outline-danger mb-3">Delete</button>
              </form>
        </div>
    </div>
  </div>
  )
}

export default CustomerDelete