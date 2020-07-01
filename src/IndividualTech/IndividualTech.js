import React, {useState, useEffect} from 'react'
import './IndividualTech.css'

function IndividualUnits (props){
    const [techAge, setTechAge]= useState('')
    const [techCost, setTechCost]= useState({})
    const [techDesc, setTechDesc]=useState('')
    const [techLoc, setTechLoc]=useState('')
    const [techDetail, setTechDetail]=useState({})
    // props.handleUnitName(props.match.params.unit)
    useEffect( ()=>{
        let IndtechURL=`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/${props.match.params.tech}`
            const makeAPICall= async()=>{
            const res = await fetch(IndtechURL)
            const json = await res.json()
            console.log('ind tech', json)
            console.log(json.age)
            setTechDetail(json)
            setTechAge(json.age)
            setTechCost(json.cost)
            setTechDesc(json.description)
            setTechLoc(json.develops_in.slice(60))
        }
        makeAPICall()
    },[props.match.params.tech] )

    let displayTechCost = <h1>loading</h1>;
    let woodCost=''
    let foodCost=''
    let goldCost=''
    let stoneCost=''

    if (techDetail) {
      if(techCost.Wood){
        woodCost=`Wood: ${techCost.Wood}`
      }
      if (techCost.Food) {
        foodCost=`Food: ${techCost.Food}`
      }
      if (techCost.Gold) {
        goldCost=`Gold: ${techCost.Gold}`
      }
      if (techCost.Stone) {
        stoneCost=`Stone: ${techCost.Stone}`
      }
    }
    if(techDetail){
      displayTechCost=<h2>Cost- {foodCost} {woodCost} {goldCost} {stoneCost}</h2>
    }
    return (
        <div className='ind-unit'>
          <h1>{props.match.params.tech}</h1>
          <h2>'{techDesc}'</h2>
          {displayTechCost}
          <h2>Available at the {techLoc}</h2>
          <h2>Available during {techAge} Age</h2>
        </div>
    )
}
export default IndividualUnits