import React, { Component } from 'react';
import { connect } from 'react-redux';

import { listCompanies } from '../../../actions/companiesActions';
import Company from './Company';
import EditCompany from './EditCompany';

class AllCompanies extends Component {

    async componentWillMount() {
        await listCompanies(this.props);
    }

    render() {
        return (
            <div>
                <h1 className="post_heading">Todas empresas</h1>        
                {
                    this.props.companies.map((company) =>
                        <div key={ company.CompanyID }>
                            {company.editing ? <EditCompany company={ company } key = { company.CompanyID } /> :
                               <Company key={ company.CompanyID } company={ company }/>  }
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state
    }
}

export default connect(mapStateToProps)(AllCompanies);