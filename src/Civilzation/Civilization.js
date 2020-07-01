import React, {useState, useEffect}  from 'react'
import { Link } from 'react-router-dom'
import './Civilization.css'

// https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

function Civilization () {
    const [civList, setCivList]= useState([])

    
    useEffect( ()=>{
        let civURL='https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
        const makeAPICallCiv = async () => {
            let res = await fetch(civURL);
            let json = await res.json();
            setCivList(json.civilizations)
            console.log(json)
        };
        makeAPICallCiv()
    },[])  

      let allCiv=civList.map( (item, index)=>{
          return(
            <h2 className='Civ-ind-civ' key={index}>
            <Link to={'/Civilization/'+item.name}>
                {item.name}
            </Link>
            </h2>
          )
      })
      return (
          <div className='Civ-civ'>
              {allCiv}
          </div>
      )
}
export default Civilization