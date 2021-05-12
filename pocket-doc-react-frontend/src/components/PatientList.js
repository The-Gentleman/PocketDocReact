import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPatients  } from '../actions/patients';

class PatientList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="patient-names">
                <h3>Your patients:</h3>
            </div>
        )
    }
}
// mapStateToProps: exactly which slice of the state 
// we want to provide to our component. 
const mapStateToProps = (state) => {
        return {patients: state.patients}
}
// to give a function that updates the store
// dispatch is reduxs setState
const mapDispatchToProps = dispatch => {
        return {
            dispatchFetchPatients: () => dispatch(fetchPatients())
        }
};


export default connect(mapStateToProps, mapDispatchToProps)(PatientList);

// QUESTIONS FOR STUDY GROUP
// 1-  Everytime I want to change a patients attribute,
//  I'd have to do this process all over again?
// 2- When I add to my reducer, I get that cases differ,
// but what would I return?