import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'

const Navbar = () => {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
          <div className="container-fluid">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src="./assets/img/ict_logo.png" alt="" />
                <span className="d-none d-lg-block">ICTAK</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
            
              </ul>
              <div className="d-flex">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
              </div>
              <div className="d-flex align-items-center">
                {/* <button type="button" className="btn btn-link px-3 me-2">
                Home
                </button> */}
                
              
                <div className="dropdown">
                    <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="50" alt="Black and White Portrait of a Man" loading="lazy" /><span>user name</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                    
                    <li>
                        <a className="dropdown-item" href="/">Logout</a>
                    </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      {/* <Header/>
      <Sidebar/>
      <Main/>
      <Footer/> */}

    
    </div>
  )
}

export default Navbar