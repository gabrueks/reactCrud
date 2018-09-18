const companyReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COMPANY':
                return state.concat([action.data]);
        case 'DELETE_COMPANY':
            return state.filter((company) => company.CompanyID !== action.CompanyID);
        case 'EDIT_POST':
            return state.map((company) => company.CompanyID === action.CompanyID ? { ...company,editing:!company.editing}:company);
        case 'UPDATE':
            return state.map((company) => {
                if(company.CompanyID === action.CompanyID) {
                    return {
                        ...company,
                        Name: action.Name,
                        editing: false
                    }
                } else return company;
            })
        case 'LIST_COMPANY':
            return state;
        default:
            return state;
    }
}

export default companyReducer;