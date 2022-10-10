import React from 'react'
import {  Link, useLocation } from 'react-router-dom';
//import { useEpisode} from '../hooks/useLocations';
import './episode.css';
import {useQuery, gql} from "@apollo/client";

export default function Episode() {

  const GET_EPISODE = gql`
query{
    episodes{
        results{
          id
          name
          air_date
          episode
          characters{
            name
            image
          }
        }

    }
}
`
const {state} = useLocation()
  const {data, error, loading} = useQuery(GET_EPISODE);


  if(error) return <div>Error..</div>
  if(loading) return <div> Loading...</div>

const result = data.episodes.results.find((e)=> e.id === state.id);
// const result2 = data.episodes.results.find((e)=> e.id === state.id);
 const result2 = result.characters;
 console.log("result2: ", result2);


  return (
    <div className='mainContainer'>
     {/* <p>{result.name}</p> */}
      <img className='bgImg' src='background.webp' alt=''></img>
      {/* {data && data.episodes.results.map((episode, index) => { */}
        {/* return ( */}
          <div>
            <h1 className='titleName'>{result.episode}: {result.name}</h1>
          <section className='outerSection'>
             <h2>Air Date: {result.air_date}</h2>
             <section>
              <h2 className='subTitleName'>Characters Appeared:</h2>
              <Link  to="/specific"  state={{id:result.id}}>
             
              {result2.map((item)=>{
                return(
                  <div className='charDiv'>
                    <img src={item.image} alt=''></img>
                    <div>{item.name}</div></div>
                )
              })}
                    </Link>

         
             </section>
          </section>
        </div>
        {/* ) */}
      {/* })} */}
      

        
    </div>
  )
}
