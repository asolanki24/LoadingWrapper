export const simpleAction = () => dispatch => {
    dispatch({
        type: "sample",
        payload: "Testing sample"
    });
}