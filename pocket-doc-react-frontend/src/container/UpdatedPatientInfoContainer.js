import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePatient  } from '../actions/updatePatient'

class UpdatedPatientInfoContainer  extends Component {

    state = {
        diagnosis: '',
        home_exercise_plan: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const updatedPatient = {...this.props.patient, diagnosis: this.state.diagnosis, home_exercise_plan: this.state.home_exercise_plan}
        this.props.dispatchUpdatePatient(updatedPatient)
    }

    handleChange = (event) => {this.setState({[event.target.name]: event.target.value})}
    
    render() {
        return (
            <div className="update-patient-form-container">
                   <h2>Patient Diagnosis:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <br></br>
                            <input type="text" name="diagnosis" value={this.state.diagnosis} onChange={this.handleChange}/>
                        </label>
                    <h2>Patient Home Exercise Plan:</h2>
                        <label>
                            <br></br>
                            <input type="text" name="home_exercise_plan" value={this.state.home_exercise_plan} onChange={this.handleChange}/>
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Submit"/>
                    </form>
                    <br></br>
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
    return {dispatchUpdatePatient: (patient) => dispatch(updatePatient (patient))}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatedPatientInfoContainer );
