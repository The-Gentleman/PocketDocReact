import React, { Component } from 'react'

export default function PatientCard(props) {
    // debugger
    return (
        <div className="PatientCard">
            <h2>Patient Name:</h2>{props.patient.name}
            <h2>Patient Symptoms:</h2>{props.patient.symptoms}
            <br></br>
            <br></br>
            ------------FIELDS FOR DIAGNOSIS AND HOME EXERCISE PLAN BELOW------------------
        </div>
    )
}

