import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    return {patientNames: state.patientNames}
}

export default connect(mapStateToProps)(PatientList);


