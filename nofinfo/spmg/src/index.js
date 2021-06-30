import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import './index.css';
import Consultas from './Pages/Consultas/Consultas';
import NovasConsultas from './Pages/NovasConsultas/NovasConsultas';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import reportWebVitals from './reportWebVitals';
;


const routing=(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ Consultas } />
        <Route path="/novaconsulta" component={NovasConsultas} />
        <Route path="/login" component={Login} />
        <Route path="/notfound" component={NotFound} /> 
        <Redirect to="/notfound"/>       
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();