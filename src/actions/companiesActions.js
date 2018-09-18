export const listCompanies = async (prop) => {
    const myHeaders = new Headers();
    await fetch('http://localhost:4000', {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    }).then((response) => response.json())
    .then(body => {
        if(body === undefined || body.length === 0){

        } else {
            for(let temp of body) {
                let data = {
                    CompanyID: temp.CompanyID,
                    Name: temp.Name,
                    editing: false
                }
                prop.dispatch({
                    type: 'ADD_COMPANY',
                    data,
                })
            }
        }
    })
}

export const insertCompany = async (prop, name) => {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    await fetch('http://localhost:4000', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ name: name}),
        mode: 'cors',
        cache: 'default'
    }).then((response) => response.json())
    .then(body => {
        const data = {
            Name: name,
            CompanyID: body.CompanyID
        }
        if(body.success === true) {
            prop.dispatch({
                type: 'ADD_COMPANY',
                data,
                editing: false
            });
        }
    })
}

export const deleteCompany = async (prop, id) => {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    await fetch('http://localhost:4000', {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify({ CompanyID: prop.company.CompanyID }),
        mode: 'cors',
        cache: 'default'
    }).then((response) => response.json())
    .then((body) => {
        if(body.success === false || body === undefined){

        } else {
            prop.dispatch({
                type: 'DELETE_COMPANY',
                CompanyID: id
            })
        }
    })
}

export const updateCompany = async (prop, name) => {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    await fetch('http://localhost:4000', {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({ CompanyID: prop.company.CompanyID, Name: name}),
        mode: 'cors',
        cache: 'default'
    }).then((response) => response.json())
    .then((body) => {
        if(body.success === false || body === undefined){

        } else {
            prop.dispatch({
                type: 'UPDATE',
                Name: name,
                CompanyID: prop.company.CompanyID,
                editing: true
            });
        }
    })
} 
