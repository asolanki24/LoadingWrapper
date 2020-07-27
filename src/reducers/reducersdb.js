export default (state = {}, action) => {
    switch (action.type) {
        case "sample": {
            return { ...state, result: action.payload };
        }
        default: {
            return state;
        }
    }
}