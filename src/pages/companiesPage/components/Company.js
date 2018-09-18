import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Zoom from '@material-ui/core/Zoom';

import { deleteCompany } from '../../../actions/companiesActions';

class Company extends Component {

    delete = async (deleteCompanyId) => {
        await deleteCompany(this.props, deleteCompanyId);
    }

    
    render() {
        return (
            <Zoom in={true}><div className="post">
                <h2 className="post_title">{ this.props.company.Name }</h2>
                <div className="control-buttons">
                    <button className="edit" onClick={() => this.props.dispatch({
                        type: 'EDIT_POST',
                        CompanyID: this.props.company.CompanyID
                    })}>Editar</button>
                    <button className="collaborators"><Link style={{ textDecoration: 'none', color: '#fff' }} to={`/customers/?id=${this.props.company.CompanyID}`}>Clientes</Link></button>
                    <button className="delete" onClick={() => this.delete(this.props.company.CompanyID)}>Deletar</button>
                </div>
            </div></Zoom>
        );
    }
}



export default connect()(Company);