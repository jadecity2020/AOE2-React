import React, {useState, useEffect}  from 'react'
import { Link } from 'react-router-dom'
import './Buildings.css'

// https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

function Buildings () {
    const [bldgList, setBldgList]= useState([])

    
    useEffect( ()=>{
        let bldgURL='https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structures'
        const makeAPICallBldg = async () => {
            let res = await fetch(bldgURL);
            let json = await res.json();
            setBldgList(json.structures)
        };
        makeAPICallBldg()
    },[])  

      let allBldg=bldgList.map( (item, index)=>{
          return(
            <h2 className='Bldg-ind-bldg' key={index}>
            <Link to={'/Buildings/'+item.name}>
                {item.name}
            </Link>
            </h2>
          )
      })
      return (
          <div className='all-Bldg'>
              {allBldg}
          </div>
      )
}
export default Buildings