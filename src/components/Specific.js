import React from "react";
import { useQuery, gql } from "@apollo/client";

import { useLocation } from "react-router-dom";
// import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import "../components/specific.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        image
        gender
        species
        status
        id
        origin {
          name
          dimension
        }
        location {
          name
        }
        episode {
          episode
          name
          id
        }
      }
    }
  }
`;
export default function Specific() {
  const { state } = useLocation();
  //  const [itemdata,setItemData]=useState('');

  const { error, loading, data } = useQuery(GET_CHARACTERS);
  // useEffect(()=>{
  //   data && data.characters.results.map((result)=>{
  //     if(result.id===state.id){
  //       setItemData(result);
  //     }

  //   })
  // },[data])
  if (loading)
    return (
      <div className="text-center">
        <img src="loading.gif" alt="image" />
      </div>
    );
  if (error) return <div>Something went wrong</div>;

  const itemdata = data.characters.results.find((e) => e.id === state.id);
  //  const itemdata3=itemdata && itemdata.episode.map((element)=>{
  //   return( element.episode)
  //  }
  //  )
  console.log("dsdsfd", itemdata);
  // console.log("  hbhdhncdcbd",itemdata3)

  return (
    <>
      <div className="mainContainer">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "bold",
            marginTop: "30px",
          }}
          className=""
        >
          {itemdata.name}
        </h1>
        <section className="main d-flex">
          <div className="">
            <span>
              <img 
                style={{ marginLeft: "30px",height:"400px" }}
                alt="Rick Sanchez"
                srcset={itemdata.image}
              />
            </span>
          </div>
          <div className="subconatiner">
            <p>
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
                className="font-medium"
              >
                Name: {itemdata.name}
              </span>
            </p>
            <p>
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
                className="font-medium"
              >
                Gender: {itemdata.gender}
              </span>
            </p>
            <p>
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
                className="font-medium"
              >
                Species: {itemdata.species}
              </span>
            </p>
            <p>
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
                className="font-medium"
              >
                Status: {itemdata.status}
              </span>
            </p>
            <p>
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
                className="font-medium"
              >
                Origin Location: {itemdata.origin.name} ,{" "}
                {itemdata.origin.dimension}
              </span>
            </p>
            <p>
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
                className="font-medium"
              >
                Last Known Location: {itemdata.location.name}
              </span>
            </p>
            <p>
              <span
                className="font-medium"
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "bold",
                  marginLeft: "20px",
                }}
              >
                Episodes Appeared In:
              </span>
            </p>
            <div className="container">
    <div className='row my-4 mx-10'>

            {itemdata&&itemdata.episode.map((element) => {
              return(


              <div className="col-md-2 my-1 mx-1 rounded-pill" style={{width:"auto",border:"2px solid white"}}>
                <Link className="" state={{id:element.id}} style={{textDecoration:"none"}} to="/episode">

                  <span  style={{color:"white"}} className="font-medium">{element.episode}</span>
                  <span className="" style={{color:"white",textDecoration:"none"}}>:  {element.name}</span>
                  </Link>
              </div>

            )})}
            </div>
          </div>
          </div>

        </section>
      </div>
    </>
  );
}
