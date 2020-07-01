import React, {useState, useEffect} from 'react'
import { dataContext } from "../App";
import './IndividualBldg.css'

function IndividualCivilization (props){
    const [bldgAge,setBldgAge]= useState('')
    // const [bldgDetail, setBuildingDetail]= useState({})
    const [bldgDetail, setBuildingDetail]=useState([])
    const [bldgHP, setBldgHP]=useState(0)
    const [bldgArmor,setBldgArmor]= useState('')
    // const DataContext = useContext(dataContext);
    // console.log("Datacontext", DataContext);
    props.handleBldgName(props.match.params.bldg)
    useEffect( ()=>{
        let IndBldgURL=`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structures`
            const makeAPICall= async()=>{
            const res = await fetch(IndBldgURL)
            const json = await res.json()
            console.log('bldg API call',json)
            setBuildingDetail(json.structures)
            let index=json.structures.map(e=>{return e.name}).indexOf(props.match.params.bldg) 
            setBldgAge(json.structures[index].age)
            setBldgArmor(json.structures[index].armor)
            setBldgHP(json.structures[index].hit_points)
        }
        makeAPICall()
    },[props.match.params.bldg])

    let index
    if(bldgDetail){
    index=bldgDetail.map(e=>{return e.name}).indexOf(props.match.params.bldg) 
  }
 
    let displayBuildingCost = <h1>loading</h1>;
    let woodCost=''
    let foodCost=''
    let goldCost=''
    let stoneCost=''
    if (bldgDetail[index]) {
      if(bldgDetail[index].cost.Wood){
        woodCost=`Wood: ${bldgDetail[index].cost.Wood}`
      }
      if (bldgDetail[index].cost.Food) {
        foodCost=`Food: ${bldgDetail[index].cost.Food}`
      }
      if (bldgDetail[index].cost.Gold) {
        goldCost=`Gold: ${bldgDetail[index].cost.Gold}`
      }
      if (bldgDetail[index].cost.Stone) {
        stoneCost=`Stone: ${bldgDetail[index].cost.Stone}`
      }
    }
    if(bldgDetail[index]){
      displayBuildingCost=<h2>Cost- {foodCost} {woodCost} {goldCost} {stoneCost}</h2>
    }

    return (
        <div className='bldg'>
          <h1>{props.match.params.bldg}</h1>
          {displayBuildingCost}
          <h2>Available Age: {bldgAge} Age</h2>
          <h2>Hit Point: {bldgHP}</h2>
          <h2>Armor: {bldgArmor}</h2> 
        </div>
    )
}
export default IndividualCivilization