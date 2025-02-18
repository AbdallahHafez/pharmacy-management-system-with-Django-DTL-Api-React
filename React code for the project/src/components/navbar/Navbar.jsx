import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white shadow-sm">
        <div className="container">
          <a className="navbar-brand custom-navbar-brand" href="/">Pharmacy</a>
          <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-list">
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="/customers">Customers</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="/products">Products</a>
              </li>
              {/* <li className="nav-item ">
                <a href='/login' className="nav-link login-btn">Login</a>
              </li>                             */}
            </ul>
          </div>
        </div>
      </nav>    
  )
}

export default Navbar