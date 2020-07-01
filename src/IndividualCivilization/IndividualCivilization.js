import React, {useState, useEffect} from 'react'
import { dataContext } from "../App";
import './IndividualCivilization.css'

function IndividualCivilization (props){
    const [civDetail,setCivDetail]= useState({})
    const [civTeamBonus, setCivTeamBonus]= useState({})
    const [civUniqueUnit, setCivUniqueUnit]=useState([])
    const [civUniqueTech, setCivUniqueTech]=useState([])
    // const DataContext = useContext(dataContext);
    // console.log("Datacontext", DataContext);
    useEffect( ()=>{
        let IndCivURL=`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${props.match.params.civlization}`
            const makeAPICall= async()=>{
            const res = await fetch(IndCivURL)
            const json = await res.json()
            setCivDetail(json)
            setCivTeamBonus(json.civilization_bonus)
            setCivUniqueUnit(json.unique_unit)
            setCivUniqueTech(json.unique_tech)
        }
        makeAPICall()
    },[props.match.params.civlization] )
    let displayCivTeamBonus = <h1>loading</h1>;
    if (civTeamBonus[0]) {
      displayCivTeamBonus = civTeamBonus.map((bonus) => {
        return <p>{bonus}</p>;
      });
    }
    let displayCivUniqueUnit = <h1>loading</h1>;
    if (civUniqueUnit[0]) {
      displayCivUniqueUnit = civUniqueUnit.map((bonus) => {
        return <p>{bonus.slice(55)}</p>;
      });
    }
    let displayCivUniqueTech = <h1>loading</h1>;
    if (civUniqueTech[0]) {
      displayCivUniqueTech = civUniqueTech.map((bonus) => {
        return <p>{bonus.slice(61)}</p>;
      });
    }
    return (
        <div className='civ-bonus'>
        <h1>{civDetail.name}</h1>
        <h2>Team Bonus: {civDetail.team_bonus}</h2>
        <h2>Civilization Bonus:</h2>
        {displayCivTeamBonus}
        <h2>Unique Unit:</h2>
        {displayCivUniqueUnit}
        <h2>Unique Technology:</h2>
        {displayCivUniqueTech}
        </div>
    )
}
export default IndividualCivilization