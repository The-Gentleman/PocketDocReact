import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDiagnosis } from '../actions/diagnosis'

class DiagnosisFormContainer extends Component {

    state = {
        diagnosis: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const updatedPatient = {...this.props.patient, diagnosis: this.state.diagnosis}
        this.props.dispatchAddDiagnosis(updatedPatient)
    }

    handleChange = (event) => {this.setState({[event.target.name]: event.target.value})}
    
    render() {
        return (
            <div className="patient-diagnosis-form-container">
                <h2>Patient Diagnosis:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <br></br>
                        <input type="text" name="diagnosis" value={this.state.diagnosis} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <br></br>
                {this.state.diagnosis}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        patients: state.patients,
        patient: state.patients.find(patient => ownProps.patient.id == patient.id)
    }
}

const mapDispatchToProps = dispatch => {
    return {dispatchAddDiagnosis: (patient) => dispatch(addDiagnosis(patient))}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisFormContainer);
// events, data, submission