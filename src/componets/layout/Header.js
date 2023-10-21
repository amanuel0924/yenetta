import React, { useState, useEffect } from "react"
import logo from "../../Asset/logo2.png"
import classes from "./Header.module.css"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [actives, setActive] = useState("Home")
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home")
    } else if (location.pathname === "add") {
      setActive("add")
    } else if (location.pathname === "about") {
      setActive("about")
    }
  }, [location])
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo yeneta store" />

      <div className={classes.nav}>
        <Link to="/">
          <p
            className={`${actives === "Home" ? classes.active : ""}`}
            onClick={() => {
              setActive("Home")
            }}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${actives === "add" ? classes.active : ""}`}
            onClick={() => {
              setActive("add")
            }}
          >
            Add Product
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${actives === "about" ? classes.active : ""}`}
            onClick={() => {
              setActive("about")
            }}
          >
            About
          </p>
        </Link>
      </div>
      <div className={classes.links}>
        <a
          href="https://linkedin.com/company/yenetta-code"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/yenettacode/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/codeyenetta"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </header>
  )
}

export default Header
