import React from 'react'
import {Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';



function App() {
  return (
    <div>
    <Navbar/>
    <Switch>

<Route exact path='/' component={Home}/>
<Route path='/rooms' exact component={Rooms}/>
<Route path='/rooms/:slug' exact component={SingleRoom}/>
<Route component={Error}/>

      </Switch>
      <Footer/>
      </div>
  )
}

export default App;
