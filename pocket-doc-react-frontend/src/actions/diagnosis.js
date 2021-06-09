export const addDiagnosis = (patient) => {
    return dispatch => {
        fetch(`http://localhost:3000/patients/${patient.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
              },
            body: JSON.stringify({patient})
        })
        .then(response => response.json())
        .then(patientElement => {
            debugger
            dispatch({type: "ADD_DIAGNOSIS", payload: patientElement})
            return patientElement.data.attributes
        })
    }
}

