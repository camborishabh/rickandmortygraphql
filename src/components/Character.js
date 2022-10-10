import React from 'react'
import {useQuery,gql} from "@apollo/client"
import { useState } from 'react';
import { Link } from "react-router-dom";

import '../components/character.css'

const GET_CHARACTERS=gql`
query ($page:Int!) {
  characters(page:$page) {
    results {
      name
      image
      gender
      species
      status
      id
    }
    info{
      count
      pages
      next
      prev
      
    }
  }
}`;



export default function Character() {
const[page1,setPage1]=useState(1)

    const {error,loading,data}=useQuery(
        GET_CHARACTERS,
        {
            variables: {
              page:page1 ,
            },
        }
        
        )
    if (loading) 
        return <div className='text-center'><img src="loading.gif" alt="image"   /></div>
        if (error) 
        return <div>Something went wrong</div>
  return (
    <>
<h1 className='' style={{color:"white",textAlign:"center",fontSize:"bold",marginTop:"30px"}}>characters</h1>
<section className="d-flex justify-content-around "style={{color:"white"}}>
    <p className="">Showing {data.characters.info.count} results</p>
    <p className="infoText">{page1} / {data.characters.info.pages}</p>
    <div className="mx-4">
        <button disabled={page1<=1} onClick={()=>{setPage1(page1 - 1)}} className='mx-4'>prev</button>
        <button disabled={page1===42} onClick={()=>{setPage1(page1 + 1)}} className='mx-4'>next</button>

        {/* <Link class="paginationBtn false" aria-disabled="false" disabled={page1<=1} onClick={()=>{setPage1(page1 - 1)}} to={`/characters?page=${data.characters.info.prev}`}>Prev</Link>
        <Link class="paginationBtn false" aria-disabled="false" disabled={page1===42} onClick={()=>{setPage1(page1 + 1)}} to={`/characters?page=${data.characters.info.next}`}>next</Link> */}

    </div>
</section>
    
 
<div className="container">
    <div className='row my-4 mx-10'>
    {data.characters.results.map((character)=>{

return(<div className='col-md-3 my-4'>
  <Link to="/specific" state={{id:character.id}}>
  <div className='image'>
   <img className="image__img" src={character.image} alt="dbjd"></img> 
   <div className='image__overlay'>
    <p className='image__description'>Name: {character.name}</p>
    <p className='image__description'>Gender: {character.gender}</p>
    <p className='image__description'>Status: {character.status}</p>
    <p className='image__description'>Species: {character.species}</p>

    </div>

    </div>
    </Link>

    </div>
)
// {console.log(character.id)}
})}
</div>
</div>



  </>
  )
}
