import React from 'react';


import {UserProvider} from './Context/UserContext'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
// import Profile from './Pages/ProfilePg';
import {LoginPg,Profile,Projects,AddProj} from './Pages/Pages';


// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <UserProvider>
    <Router>
          <div className="App">
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/project" component={Projects} />
            
            <Route path="/project/add" component={AddProj} />
            <Route path="/login" component={LoginPg} />
            
        </Switch>
          </div>
      </Router>
      
    </UserProvider>
    
  );
}

export default App;
