import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,orginals,comedy,horror} from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action'isSmall />
      <RowPost url={comedy} title='comedy'isSmall />
      <RowPost url={horror} title='horror'isSmall />
    </div>
  )
}

export default App