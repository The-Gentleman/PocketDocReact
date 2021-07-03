import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPatients  } from '../actions/patients'
import { Link } from 'react-router-dom'

class PatientList extends Component {

    componentDidMount() {
        this.props.dispatchFetchPatients()
    }

    render() {
        return (
            <div className="patient-names">
                <h3>Your patients:</h3>
                {this.props.patients.map(patient => 
                    {return <ol><Link to={`patients/${patient.id}`}>{patient.name}</Link></ol>})
                }
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
/*
Aim: To create a like button next to the names of each patient with a numerical representation of how many times the button was pressed.
What I would need:
- Create a new component 
    -within this new component, I need to track the patient and add local state.
    -within local state, I would need to have a counter attribute that increased everytime the like button was pressed
- Create an onClick handler
    - Within this onClick handler, I need a counter to track event?(amount of times the button is clicked)
- Call onChange next to the button within the return.
*/


