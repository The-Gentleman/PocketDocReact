import React, { Component } from 'react'

export default class PatientCard extends Component {
    render() {
        return (
            <div>
                <h1>Patient info here</h1>
            </div>
        )
    }
}

// put redux logic in container component
    // if no patients in store, props patients = undefined
    // if no patient dispatchFetchPatient
// pass prop into PatientCard



