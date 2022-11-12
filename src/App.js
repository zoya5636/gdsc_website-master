import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from './views/Landing/Landing';
import { Team } from './views/Team2020/Team';
import { Events } from './views/Events/Events';
import { PastEvents } from './views/Events/Past Events';
// import { default as Footer } from './views/Footer/Footer';
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<Landing />)}/>
        <Route exact path='/team/2022' render={() => (<Team />)}/> 
        <Route exact path='/events/2022' render={() => (<Events />)}/> 
        <Route exact path='/past_events/2022' render={() => (<PastEvents />)}/>        
      </Switch>
      </BrowserRouter>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
