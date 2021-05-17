import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPatients  } from '../actions/patients'
import { Link } from 'react-router-dom'

class PatientList extends Component {

    componentDidMount() {
        this.props.dispatchFetchPatients()
    }
    // now I need to make these names:
    //  1) Clikable links --> Gonna need a click listener
    //  2) Routed somewhere
    render() {
        return (
            <div className="patient-names">
                <h3>Your patients:</h3>
                {this.props.patients.map(patient => {
                    return <ol>
                        <Link to={`patients/${patient.id}`}>{patient.name}</Link>
                        </ol>
                    })}
            </div>
        )
    }
}
// mapStateToProps: exactly which slice of the state 
// we want to provide to our component. 
const mapStateToProps = (state) => {
        return {patients: state.patients}
}
// mapDispatchToProps: to give a function that updates the store
// dispatch is reduxs setState
const mapDispatchToProps = dispatch => {
        return {
            dispatchFetchPatients: () => dispatch(fetchPatients())
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(PatientList);

