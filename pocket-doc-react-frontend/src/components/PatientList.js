import React, { Component } from 'react'
import LikeButton from './LikeButton.js'
import { connect } from 'react-redux'
import { fetchPatients  } from '../actions/patients'
import { Link } from 'react-router-dom'


class PatientList extends Component {
    state = {
        patients: this.props.patients,
        query: ''
    }

    componentDidMount() {
        this.props.dispatchFetchPatients()
    }

    componentDidUpdate(prevProps){
        if (this.props.patients !== prevProps.patients) {
            this.setState({
                patients: this.props.patients
            })
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        let patientsObj = this.props.patients 
        // patientsObj.sort((a,b) => a.name.localeCompare(b.name))
    }

    updateSearch = () => {
        this.setState({
            patients: this.props.patients.filter((patient) => patient.name.includes(this.state.query))
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            query: event.target.value
        }, this.updateSearch)
    }

    render() {
        return (
            <div className="patient-names">

                <form>
                    Search:
                    <input type="text" value={this.state.query}onChange={this.handleChange}></input>
                </form>


                <h3>Your patients:</h3>
                <ol>
                {this.state.patients.map(patient => 
                    {return <Link key={patient.id} to={`patients/${patient.id}`}>{patient.name}<br></br></Link>})
                }
                </ol>
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





