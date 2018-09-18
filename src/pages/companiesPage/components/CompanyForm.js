import React, { Component } from 'react';
import { connect } from 'react-redux';

import Zoom from '@material-ui/core/Zoom';

import { insertCompany } from '../../../actions/companiesActions';

class CompanyForm extends Component {

    handleSubmit = async (prop) => {
        const name = this.getName.value;
        await insertCompany(prop, name);
    }

    noRefresh = (e) => {
        e.preventDefault();
        this.getName.value = '';
    }

    render() {
        return (
            <Zoom in={true}><div className="post-container">
                <h1 className="post_heading">Criar empresa</h1>
                <form className="form" onSubmit={this.noRefresh}>
                    <input required type="text" ref={(input) => this.getName = input} placeholder="Nome da empresa" /><br /><br />
                    <button onClick={() => this.handleSubmit(this.props)}>Adicionar</button>
                </form>
            </div></Zoom>
        );
    }
}

export default connect()(CompanyForm);