import React, {useState, useEffect} from 'react'
import './IndividualUnits.css'

function IndividualUnits (props){
    const [unitDetail,setUnitDetail]= useState({})
    const [unitCost, setUnitCost]= useState({})
    const [unitAttackBonus, setUnitAttackBonus]=useState([])

    useEffect( ()=>{
        let IndUnitURL=`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/${props.match.params.unit}`
            const makeAPICall= async()=>{
            const res = await fetch(IndUnitURL)
            const json = await res.json()
            setUnitDetail(json)
            setUnitAttackBonus(json.attack_bonus)
            setUnitCost(json.cost)
        }
        makeAPICall()
    },[props.match.params.unit] )

    // let displayUnitAttackBonus = <h1>loading</h1>;
    // if (unitAttackBonus[0]) {
    //   displayUnitAttackBonus = unitAttackBonus.map((bonus) => {
    //     return <p>{bonus}</p>;
    //   });
    // }
    let displayUnitCost=<p>Loading Cost</p>
    if(unitCost){
    if(!unitCost.Food){
      displayUnitCost=<p>Cost- Wood: {unitCost.Wood} Gold: {unitCost.Gold}</p>
    } else if (!unitCost.Wood){
      displayUnitCost=<p>Cost- Food: {unitCost.Food} Gold: {unitCost.Gold}</p>
    } else if (!unitCost.Gold){
      displayUnitCost=<p>Cost- Food: {unitCost.Food} Wood: {unitCost.Wood}</p>
    } else {
      displayUnitCost=<p>Cost- Food: {unitCost.Food} Wood: {unitCost.Wood} Gold: {unitCost.Gold}</p>
    }
  }
    
    return (
        <div className='ind-unit'>
        <h1>{unitDetail.name}</h1>
        <h2>'{unitDetail.description}'</h2>
        <h2>Attack: {unitDetail.attack}</h2>
        <h2>Armor(Melee/Pierce): {unitDetail.armor}</h2>
        {displayUnitCost}
        </div>
    )
}
export default IndividualUnits