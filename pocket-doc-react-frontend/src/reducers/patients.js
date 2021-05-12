export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_PATIENTS":
            return action.payload;
        default:
            return state;
    }
}

