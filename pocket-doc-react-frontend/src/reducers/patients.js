export default (state = [], action) => {
    switch (action.type) {
        case "PATIENT_NAME":
            return action.patient;
        default:
            return state;
    }
}

