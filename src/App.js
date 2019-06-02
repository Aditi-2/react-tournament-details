import React from 'react'
import { Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import TableContainer from './containers/TableContainer'
import SeriesContainer from './containers/SeriesContainer'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <Route exact path="/" component={TableContainer} />
      <Route exact path="/view-series/:id" component={SeriesContainer} />
    </div>
  )
}

export default App
