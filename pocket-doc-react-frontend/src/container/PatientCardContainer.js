import React, { Component } from 'react'
import PatientCard from '../components/PatientCard.js'
import { connect } from 'react-redux'
import { fetchPatients  } from '../actions/patients'

 class PatientCardContainer extends Component {

    componentDidMount() {
        this.props.dispatchFetchPatients()
    }

     render() {
        return (
            <div>
               <h2>Patient Name:</h2>{this.props.patientName}
               <h2>Patient Symptoms:</h2>{this.props.patientSymptoms}
               <h2>Maaaan... i dont even know:</h2>{<PatientCard />}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        patientName: state.patients.find(patient => {
        if (ownProps.match.params.id == patient.id) {
            return patient  
           }
       }).name,
       patientSymptoms: state.patients.find(patient => {
        if (ownProps.match.params.id == patient.id) {
            return patient 
           }
       }).symptoms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchPatients: () => dispatch(fetchPatients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientCardContainer);
// ***dispatchFetchPatients !== dispatch(fetchPatients())






