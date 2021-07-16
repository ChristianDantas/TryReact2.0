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
<<<<<<< HEAD
        <Route  path="/consulta" component={ Consultas } />
        <Route path="/novaconsulta" component={NovasConsultas} />
        <Route exact path="/" component={Login} />
        <Route path="/notfound" component={NotFound} /> 
=======
        <Route exact path="/" component={ Login } />
        <Route path="/novaconsulta" component={NovasConsultas} />
        <Route path="/consultas" component={Consultas} />
        <Route exact path="/notfound" component={NotFound} /> 
>>>>>>> 1df76136b09c35f0448f84dde8b875c4499f9b68
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