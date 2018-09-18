import React, { Component } from 'react';

import PostForm from './components/CompanyForm';
import AllCompanies from './components/AllCompanies';

class CompanyPage extends Component {
    render() {
      return (
        <div className="App">
          <div className="navbar">
            <h2 className="center ">Empresas</h2>
          </div>
          <PostForm/>
          <AllCompanies/>
        </div>
      );
    }
}

export default CompanyPage;
