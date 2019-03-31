import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-size-4">
            Ryan Barley
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a href="#" className="navbar-item is-active">
              About
            </a>
            <a href="#" className="navbar-item">
              Portfolio
            </a>
            <a href="#" className="navbar-item">
              Contact
            </a>
            <Link to="/resume" className="navbar-item">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
