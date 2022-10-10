import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="main">
  <div className="">
    <div className="" style={{textAlign:"center",paddingTop:"40px",color:"white"}}>
      <h1 className="">Rick and Morty</h1>
      <h2 className="">Explore the weirdness!</h2>
    </div>
    <section className="d-flex" >
      <Link to="/locations">

      <div className="aman1" style={{marginLeft:"100px",color:"white"}} >
        <span >
          <img className="image333" alt="image2" src="locations.webp" style={{height:"300px",width:"300px",marginRight:"200px",marginTop:"100px"}} />
        </span>
        <h3 className="aman">Locations</h3>
      </div>
      </Link>
      <Link to="/characters">

      <div className=""  style={{color:"white"}}>
        <span >
          <img className="image333" alt="image3" src="characters.webp"  style={{height:"300px",width:"300px",marginRight:"200px",marginTop:"100px"}}  />
        </span>
        <h3 className="aman">Characters</h3>
      </div>
      </Link>
      <Link to="/episodes">
      <div className="" style={{color:"white"}}>
        <span >
          <img className="image333" alt="image4" src="episodes.webp"  style={{height:"300px",width:"300px",marginTop:"100px"}}  />
        </span>
        <h3 className="aman">Episodes</h3>
      </div>
      </Link>
    </section>
  </div>
</div>
    </>
  );
}
