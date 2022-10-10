import React from 'react'
import { Link } from "react-router-dom";
import '../components/header.css'

export default function Header() {
  return (
    <div>
            <div  className="main">
        <img  className="image111"
       background-image src="background.webp" 
        alt="" />
       <header 
        className="main111 d-flex fixed-top"
      >
        <Link
          className="container"
          to="/"
          style={{ width:"100px"}}
        >
          <span>
            <img alt="" aria-hidden="true" src="logo.webp" style={{marginLeft:"10px"}}/>
          </span>
        </Link>
        <nav className="container" style={{textAlign:"center",paddingTop:"5px"}}>
          <Link
            className="container "
            to="/characters"
            style={{
              color: "white",
              marginRight: "100px",
              textDecoration: "none"
            }}
          >
            Characters
          </Link>
          <Link
            className=" container"
            to="/locations"
            style={{
              color: "white",
              marginRight: "100px",
              textDecoration: "none",
            }}
          >
            Locations
          </Link>
          <Link
            className=" conatiner"
            to="/episodes"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Episodes
          </Link>
        </nav>
      </header>
    </div>
    </div>
  )
}
