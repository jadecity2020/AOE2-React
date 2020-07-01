import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Units.css'

function Units (){
    const [unitList,setUnitList] = useState([])
    useEffect( ()=>{
        let unitURL='https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units'
        const makeAPICallUnit = async () => {
            let res = await fetch(unitURL);
            let json = await res.json();
            setUnitList(json.units)
        };
        makeAPICallUnit()
    },[])  
    let allUnits=unitList.map( (item, index)=>{
        return(
          <p className='Unit-ind-civ' key={index}>
          <Link to={'/Units/'+item.name}>
              {item.name}
          </Link>
          </p>
        )
    })
    return(
        <div className='Unit-units'>
        {allUnits}
    </div>
    )
}

export default Units