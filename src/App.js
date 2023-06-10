import React from 'react'
import './App.css';
import {action,documentaries,originals,romance,horror,comedy} from'./urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/><br/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={romance} title='Romance' isSmall/>
     <RowPost url={documentaries} title='Dcumentaries' isSmall/>
    </div>
  );
}

export default App;