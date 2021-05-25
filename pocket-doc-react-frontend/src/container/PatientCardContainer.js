import React, { Component } from 'react'
import PatientCard from '../components/PatientCard.js'
import { connect } from 'react-redux'
import { fetchPatients  } from '../actions/patients'

 class PatientCardContainer extends Component {

    componentDidMount() {
        if (!this.props.patient){
            this.props.dispatchFetchPatients() 
        }
    }

     render() {
         if (!this.props.patient){
             return 'LOADING'
         }
        return (
            <div>
               <h2>Patient Name:</h2>{this.props.patient.name}
               <h2>Maaaan... i dont even know:</h2>{<PatientCard />}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    return { 
        patient: state.patients.find(patient => ownProps.match.params.id == patient.id)
       }
    }


const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchPatients: () => dispatch(fetchPatients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientCardContainer);
// ***dispatchFetchPatients !== dispatch(fetchPatients())






