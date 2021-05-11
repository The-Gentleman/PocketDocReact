export const fetchPatientNames = () => {
    return dispatch => { 
        fetch('http://localhost:3001/api/v1/patients')
        .then(response => response.json())
        .then(patients => {
            dispatch({type: "PATIENT_NAME"})
            patients.data.map(patient => {
                return patient.attributes.name
            })
        })
    }
}