import React, { Component } from 'react'

export default class PatientList extends Component {

    constructor(){
        super();
        this.state = {
            patientNames: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/patients')
            .then(response => response.json())
            .then(patients => {
                this.setState({
                    patientNames: patients.data.map(patient => {
                        return patient.attributes.name
                    })
                })
            })
    }

    render() {
        return (
            <div className="patient-names">
                <h3>Your patients:</h3>
                <ul>{this.state.patientNames}</ul>
            </div>
        )
    }
}
