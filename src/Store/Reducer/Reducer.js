const GLOBAL_STATE = {
    products: [],
    CurrentUser: {}
}

const Reducer = (state = GLOBAL_STATE, action) => {
    switch (action.type) {
        case 'SETUSER':
            return ({
                ...state,
                CurrentUser: action.payload
            })
        case 'REMOVEUSER':
            return ({
                ...state,
                CurrentUser: {}
            })
        default:
    }
    return state
}
export default Reducer