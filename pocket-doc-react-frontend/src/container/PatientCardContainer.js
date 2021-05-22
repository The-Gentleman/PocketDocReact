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
                -----------------------------------------
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    debugger
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchPatients: () => dispatch(fetchPatients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientCardContainer);

// put redux logic in container component
    // if no patients in store, props patients = undefined
    // if no patient dispatchFetchPatient
// pass prop into PatientCard

// ***dispatchFetchPatients !== dispatch(fetchPatients())


// match prop => patientID




