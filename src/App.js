import React from 'react';
import LoginPg from './Pages/LoginPg';

import {UserProvider} from './Context/UserContext'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <UserProvider>
    <Router>
          <div className="App">
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/" component={NewProject} /> */}
            <Route path="/" component={LoginPg} />
            
        </Switch>
          </div>
      </Router>
      
    </UserProvider>
    
  );
}

export default App;
