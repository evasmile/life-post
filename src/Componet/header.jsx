import React from "react";


function Header(){

    return(
        <header>
    <nav  className="navbar navbar-expand-lg bg-body-tertiary fixed-top"  >
        <div className="container-fluid" >
          <a className="navbar-brand" href="/home">My Blog</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/newBlog">Add New</a>
           
            </div>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Header;