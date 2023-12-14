import { useState } from 'react';
import './Country.css';
const Country = ({country,hundleVisitedCountry, hundleVisitedFlags}) => {

    const {name,flags,population,area,cca3} =  country;
    
    const [visited,setvisited] = useState(false)

    const hundleVisited = () =>{

        setvisited(!visited);
    }

    const passWithParams = () =>{

        hundleVisitedCountry(country);
    }



   
    
    
    return (
        <div className={`country ${visited && 'visited'}`}>

            <h3 style={{color:visited?'purple':'red'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>code:{cca3}</small></p>
            <p>Populataion:{population}</p>

            <p>Area:{area}</p>


            <button onClick={passWithParams}>Mark visited</button>

            <button onClick={()=> hundleVisitedFlags(country.flags.png)}>Add Flag</button>

            
            
            <button onClick={hundleVisited}>{visited ? 'visited' : 'going'}</button>

            {visited ? 'I have visited this country':'I want to visited country'}
            
        </div>
    );
};

export default Country;                              
                                                                                       