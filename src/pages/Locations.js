import React from 'react'
import '../css/locations.css';
import { useLocations } from '../hooks/useLocations';

export default function Locations() {

  const {data, error, loading} = useLocations();
  console.log({
    error,
    loading,
    data,
});

  if(error) return <div>Error..</div>
  if(loading) return <div> Loading...</div>

  return (
    <div>
      <section className='cardlayout'>

      {data.locations.results.map(location => {
                        return (
                          <div className='card'>
                            <h2>{location.name}</h2>
                            <div>
                              <p>Location Type: {location.type}</p>
                              <p>Dimension: {location.dimension}</p>
                            </div>
                            <p>Residents</p>
                            <div>
                              {location.residents.map(location2 => {
                                return (
                                  <>
                                     <a className='namelink' href={location2.name}> {location2.name} </a>
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
