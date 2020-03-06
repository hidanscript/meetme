import React from 'react';
import './css/App.css';
import './css/Generales.css';
import { Route, Switch } from "react-router-dom";
import Routes from './lib/routes';

function App() {
  return (
    <div className="App">
      <Route render={({location}) => (
        <Switch>
          <Route exact path="/" component={Routes.Landing} />
        </Switch>
      )} />
    </div>
  );
}

export default App;
