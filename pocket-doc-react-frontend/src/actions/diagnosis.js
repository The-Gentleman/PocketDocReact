export const dispatchAddDiagnosis = (patient) => {
    return dispatch => {
        fetch(`http://localhost:3000/patients/${patient.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
              },
            body: JSON.stringify(patient)
        })
        .then(response => response.json())
        .then(patientElement => {
            dispatch({type: "ADD_DIAGNOSIS", payload: patientElement})
        })
    }
}

// Updating patient within this function
    // fetch request to route that has patient ID
    // patient diagnosis in body
    // pass in arguement(s) and use that as the body
    // payload represents the patient i just diagnosed