import { EDIT_SERVICE, CANCEL_SERVICE_FIELD, CHANGE_SERVICE_FIELD } from "../actions/actions"

const initialState = { id: null, name: '', price: '' }

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload
            return { ...state, [name]: value}
        case EDIT_SERVICE:
            const { item } = action.payload
            return {...state, ...item}
        case CANCEL_SERVICE_FIELD:
            return initialState
        default:
            return state
    }
}

export default formReducer

