import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CompanyPage from './pages/companiesPage/CompanyPage';
import CompanyCustomers from './pages/companyCustomersPage/CompanyCustomers';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ CompanyPage }/>
          <Route exact path='/customers/:id' component={ CompanyCustomers }/>
        </Switch>
      </Router>
    )
  }
}

export default App;
