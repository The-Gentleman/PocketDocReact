import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDiagnosis } from '../actions/diagnosis'

class DiagnosisFormContainer extends Component {

    handleSubmit = (event, patient) => {
        // debugger ----> patient is currently undefined. The problem has to be before this function
        event.preventDefault()
        // this.props.match.params.id
        this.props.dispatchAddDiagnosis(patient)
    }
    
    render() {

        return (
            <div className="patient-diagnosis-form-container">
                <h2>Patient Diagnosis:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <br></br>
                        <input type="text" name="diagnosis" />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // get patients via state.patients
}

const mapDispatchToProps = dispatch => {
    return {dispatchAddDiagnosis: (patient) => dispatch(addDiagnosis(patient))}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisFormContainer);
// events, data, submission