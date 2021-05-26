import React, { Component } from 'react'

export default function PatientCard(props) {
    return (
        <div>
            <h2>Patient Name:</h2>{props.patient.name}
            <h2>Patient Symptoms:</h2>{props.patient.symptoms}
        </div>
    )
}
