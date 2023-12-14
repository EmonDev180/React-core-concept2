import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setcountries] = useState([])

    const [visitedCountries,setVisitedCountries] = useState([]) 

    const [visitedFlags,setvisitedFlags] = useState([]);

    useEffect(() => {


        fetch('https://restcountries.com/v3.1/all')

            .then(res => res.json())
            .then(data => setcountries(data))






    }, [])

    const hundleVisitedCountry = country =>{

        console.log('add this to your visited country')

        const newVisitedCountries = [...visitedCountries,country];

        setVisitedCountries(newVisitedCountries)

       

    }

    const hundleVisitedFlags = flag =>{

        const newVisitedFlags = [...visitedFlags,flag]

        setvisitedFlags(newVisitedFlags);


    }



    


    return (
        <div>

            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited countries:{visitedCountries.length}</h5>

                <ul>

                    {
                        
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)

                    }


                </ul>
                
            </div>

            <div className="flag-container">
                {

                    visitedFlags.map(flag => <img src={flag} alt="" /> )
                }


            </div>

            <div className="country-container">

                {

                    countries.map(country => <Country 
                        key={country.cca3} 

                        hundleVisitedCountry ={hundleVisitedCountry}

                        hundleVisitedFlags = {hundleVisitedFlags}

                        country={country}></Country>)
                }

            </div>

        </div>
    );
};

export default Countries;