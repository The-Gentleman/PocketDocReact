export const fetchPatients = () => {
    return dispatch => { 
        fetch('http://localhost:3001/api/v1/patients')
        .then(response => response.json())
        .then(patients => {
            const payload = patients.data.map(patient => {
                return patient.attributes
            })
            dispatch({type: "FETCH_PATIENTS", payload})
        })
    }
}