import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">EL BUEN SABOR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="buttons">
          <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>
              Login</a>

              <a href="" className="btn btn-outline-dark">
              <i className="fa fa-user-plus me-1"></i>
              Register</a>

              <a href="" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"></i>
              Cart (0)</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar