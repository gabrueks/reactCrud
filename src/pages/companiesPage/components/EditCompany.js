import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCompany } from '../../../actions/companiesActions';

class EditCompany extends Component {

    handleEdit = async () => {
        const newName = this.getName.value;
        await updateCompany(this.props, newName);
    }

    preventRefresh = (e) => {
        e.preventDefault();
    }

    render() {
        return ( 
            <div className="post">
                <form className="form" onSubmit={this.preventRefresh}>
                    <input required type="text" ref={(input) => this.getName = input}
                    defaultValue={this.props.company.Name} placeholder="Enter company name" /><br /><br />
                    <button onClick={this.handleEdit}>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditCompany);