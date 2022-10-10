import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './episodes.css';
import { useEpisodes,} from './useLocations';

export default function Episodes(props) {
  
  const [pageNo, setPageNo] = useState(1);
  const {data, error, loading} = useEpisodes(pageNo);
  console.log({
    error,
    loading,
    data,
});




  if(error) return <div>Error..</div>
  if(loading) return <div> Loading...</div>

  return (
    
    <div className='mainlayout'>
      <img className='bgImg' src='background.webp' alt=''></img>
      <h1 className='toptext'>Episodes</h1>
      <section className='paginationsection'>
        <p className='infoText1'>Showing {data.episodes.info.count} results</p>
        <p className='infoText2'>Page {pageNo}/{data.episodes.info.pages}</p>
        <div className='infoText3'>
          <a href="#"  className={`infoTextBtn ${pageNo === 1 ? "disabledLink" :""}`} onClick={() =>setPageNo(pageNo-1)}>Prev</a>
          <a href="#" className={`infoTextBtn ${pageNo === data.episodes.info.pages ? "disabledLink" :""}`} onClick={() =>{
            setPageNo(pageNo+1)
           
            }}>Next</a>

         
        </div>

      </section>
      <section className='cardlayout'>
      
       {data && data.episodes.results.map((episode,index) => {
                        return (
                        
                          <div className='card'>
                            <Link to='/episode' state={{id: episode.id}} key={index}><h2>#{episode.id} {episode.episode}</h2></Link>                           
                            <div>
                              <p>Name: {episode.name}</p>
                              <p>Air Date: {episode.air_date}</p>
                            </div>
                            <p>Characters Appeared: </p>
                            <div className='namelinkbg'>
                              {episode.characters.map((episode2,index) => {
                                return (
                                  <>
                                     <Link className='namelink' to="/Specific" > {episode2.name} </Link>
                                  </>
                                )
                              })}
                             
                            </div>
                          </div>
                        )})}
              
              </section>
    </div>  
  )
}
