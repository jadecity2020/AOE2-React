import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Tech.css'

function Tech (){
    const [techList,setTechList] = useState([])
    useEffect( ()=>{
        let techURL='https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technologies'
        const makeAPICallUnit = async () => {
            let res = await fetch(techURL);
            let json = await res.json();
            setTechList(json.technologies)
        };
        makeAPICallUnit()
    },[])  
    let allTechs=techList.map( (item, index)=>{
        return(
          <p className='ind-tech' key={index}>
          <Link to={'/Technology/'+item.name}>
              {item.name}
          </Link>
          </p>
        )
    })
    return(
        <div className='techs'>
        {allTechs}
    </div>
    )
}
export default Tech