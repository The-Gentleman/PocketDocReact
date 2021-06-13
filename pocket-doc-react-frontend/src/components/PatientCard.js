import React, { Component } from 'react'
import UpdatedPatientInfoContainer from '../container/UpdatedPatientInfoContainer'
export default function PatientCard(props) {

    return (
        <div className="PatientCard">
            <h2>Patient Name:</h2>{props.patient.name}
            <h2>Patient Symptoms:</h2>{props.patient.symptoms}
            <br></br>
            <br></br>
            <UpdatedPatientInfoContainer patient={props.patient} />
        </div>
    )
}

