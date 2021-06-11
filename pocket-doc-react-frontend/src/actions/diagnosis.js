export const addDiagnosis = (patient) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/patients/${patient.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
              },
            body: JSON.stringify({patient})
        })
        .then(response => response.json())
        .then(patientElement => {
            dispatch({type: "ADD_DIAGNOSIS", payload: patientElement})
            return patientElement
        })
    }
}

