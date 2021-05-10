import React, { Component } from 'react'
            // Desired behavior:
            // render patient names onto dom

export default class PatientList extends Component {

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/patients')
            .then(response => response.json())
            .then(patients => {
                patients.data.map(patient => {
                    console.log(patient.attributes.name)
                })
            })
    }

    render() {
        return (
            <div className="patient-names">
                <p>Your patients</p>
            </div>
        )
    }
}
