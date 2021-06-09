// reducer defines changes to state
export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_PATIENTS":
            return action.payload;
        case "ADD_DIAGNOSIS":
            debugger
            return state.map(patient => {
                if (action.payload.id === patient.id){
                    return action.payload;
                } else {
                    return patient
                }
            });
        default:
            return state;
    }
}
// when addding a diagnosis, update the patients array by copying everything
// there before using map but replace the one I updated w/ the updated patient from payload
// action.payload = updated patient
// action type dicatates what changes are made to state 
// payload is other required info. If adding, updating, etc.
// it would be what its getting changed into.
// type is address --- payload is contents
// type is the department --- payload is the extension

