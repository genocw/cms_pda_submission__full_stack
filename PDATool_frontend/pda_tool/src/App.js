import React, { Component, Fragment } from 'react';
import ModuleListContainer from './containers/ModuleListContainer.js';
import SingleModuleContainer from './containers/SingleModuleContainer.js';
import ModuleEditFormContainer from './containers/ModuleEditFormContainer.js';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ModuleListPrintContainer from './containers/ModuleListPrintContainer';


class App extends Component {
  render() {
    return (

      <Router >
        <Fragment>
          <Switch>

          <Route exact path = '/' component={ModuleListContainer}/>
          <Route exact path = '/api/modules' component={ModuleListContainer}/>
          <Route exact path = '/api/modules/detailed' component={ModuleListPrintContainer}/>
          <Route exact path="/api/modules/:id" render = {(props) => {
            const id = props.match.params.id;
            return <SingleModuleContainer id={id} />
          }}
          />
          <Route exact path="/api/modules/edit/:id" render = {(props) => {
            const id = props.match.params.id;
            return <ModuleEditFormContainer id={id} />
          }}
          />

          </Switch>
        </Fragment>
      </Router>

    );
  }
}

export default App;
//
// <Fragment>
//   <h1>container for main page showing list of modules:</h1>
//   <ModuleListContainer />
// </Fragment>
