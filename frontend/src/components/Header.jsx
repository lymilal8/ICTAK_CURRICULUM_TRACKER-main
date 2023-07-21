import React ,{useState} from 'react'

const Header = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //   setSidebarOpen(!sidebarOpen);
    // }
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

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light header">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <a href="index.html" className="logo d-flex align-items-center">
                <img src="./assets/img/ict_logo.png" alt="" />
                <span className="d-none d-lg-block">ICTAK</span>
                </a>
      

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>
    </div>

    <div class="d-flex align-items-center">
      
      <div class="dropdown">
        <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="50" alt="Black and White Portrait of a Man" loading="lazy" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav> */}


{/* <header id="header" className="header fixed-top d-flex align-items-center">
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
           
            <div class="container-fluid">
               
                <a href="index.html" className="logo d-flex align-items-center">
                <img src="./assets/img/ict_logo.png" alt="" />
                <span className="d-none d-lg-block">ICTAK</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul class="navbar-nav  d-flex align-items-center">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li>
                    <li className="nav-item dropdown p-2 flex-grow-1 ">
                    <a className="nav-link nav-profile d-flex align-items-center p-2" href="#" data-bs-toggle="dropdown">
                    <img src="./assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle p-2">Admin</span>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                        </a>
                    </li>
                    </ul>
                </li>
                </ul>
                
                </div>
            </div>
            </nav>
            </header>
                */}
    </div>
  )
}

export default Header