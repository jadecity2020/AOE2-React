import React, {useState, createContext} from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import {Route, Link} from 'react-router-dom'
import Civilization from './Civilzation/Civilization';
import IndividualCivilization from './IndividualCivilization/IndividualCivilization';
import IndividualUnits from './IndividualUnits/IndividualUnits'
import IndividualBldg from './IndividualBldg/IndividualBldg'
import Units from './Units/Units'
import Buildings from './Buildings/Buildings'
import Tech from './Tech/Tech'
import IndividualTech from './IndividualTech/IndividualTech'
import Ages from './Ages/Ages'
import About from './About/About'

// export const dataContext = createContext();

function App() {  
  const[bldgName,setBldgName]=useState('')
  const handleBldgName=name=>setBldgName(name)
  return (
    <div className="App">
      {/* <dataContext.Provider value={ {handleCivName, handleUnitName, civName, unitName} }> */}
      <div>
        <nav className='navbar'>
          <Link to='/'>
            <h1>Age of Empires II: The Conquerors</h1>
          </Link>   
            <ul className='navbar-selection'>
              <Link to='/Civilization'><li>Civilization</li></Link>
              <Link to='/Units'><li>Units</li></Link>
              <Link to='/Buildings'><li>Buildings</li></Link>
              <Link to='/Technology'><li>Technology</li></Link>
              <Link to='/Ages'><li>Ages</li></Link>
              <Link to='/About'><li>About</li></Link>
            </ul>
        </nav>   
      </div>
      <main>
        <Route exact path='/' component={Introduction} />
        <Route exact path='/Civilization' component={Civilization} />
        <Route exact path='/Civilization/:civlization'
          render={ (props)=>
          <IndividualCivilization {...props}
          />}/>
        <Route exact path='/Units' component={Units}/>
        <Route exact path='/Units/:unit'
          render={ (props)=>
          <IndividualUnits {...props}
          />}/>
        <Route exact path='/Buildings' component={Buildings} />
        <Route exact path='/Buildings/:bldg'
          render={ (props)=>
          <IndividualBldg {...props}
          handleBldgName={handleBldgName}
          bldgName={bldgName}
          />}/>
        <Route exact path='/Technology' component={Tech} />
        <Route exact path='/Technology/:tech'
          render={ (props)=>
          <IndividualTech {...props}
          // handleBldgName={handleBldgName}
          // bldgName={bldgName}
          />}/>
          <Route exact path='/Ages' component={Ages} />
          <Route exact path='/About' component={About} />
        {/* </dataContext.Provider> */}
      </main>
    </div>
  );
}

export default App;
