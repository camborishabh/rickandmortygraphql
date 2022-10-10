import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './locationss.css';
import { useLocations } from './useLocations';

export default function Locations() {
  
  const [pageNo, setPageNo] = useState(1);
  const {data, error, loading} = useLocations(pageNo);
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
      <h1 className='toptext'>Locations</h1>
      <section className='paginationsection'>
        <p className='infoText1'>Showing {data.locations.info.count} results</p>
        <p className='infoText2'>Page {pageNo}/{data.locations.info.pages}</p>
        <div className='infoText3'>
          <a href='#' className={`infoTextBtn ${pageNo === 1 ? "disabledLink" :""}`} onClick={() =>setPageNo(pageNo-1)}>Prev</a>
          <a href="#" className={`infoTextBtn ${pageNo === data.locations.info.pages ? "disabledLink" :""}`} onClick={() =>{
            setPageNo(pageNo+1)
           
            }}>Next</a>

         
        </div>

      </section>
      <section className='cardlayout'>
      
       {data && data.locations.results.map((location,index) => {
                        return (
                        
                          <div className='card' key={index}>
                            <h2>{location.name}</h2>
                            <div>
                              <p>Location Type: {location.type}</p>
                              <p>Dimension: {location.dimension}</p>
                            </div>
                            <p>Residents : </p>
                            <div className='namelinkbg'>
                              {location.residents.map((location2, index) => {
                                return (
                                  <>
                                     <Link className='namelink' key={index} to='/specific'> {location2.name} </Link>
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
