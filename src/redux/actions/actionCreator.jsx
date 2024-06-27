import { SET_SERVICE, EDIT_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CANCEL_SERVICE_FIELD } from "./actions";

export const setService = (id, name, price) => {
    return {
        type: SET_SERVICE,
        payload: { id, name, price }
    }
}

export const editService = (item) => {
    return {
        type: EDIT_SERVICE,
        payload: { item }
    }
}

export const removeService = (id) => {
    return {
        type: REMOVE_SERVICE,
        payload: { id }
    }
}

export const cancelServiceField = () => {
    return {
        type: CANCEL_SERVICE_FIELD
    }
}

export const changeServiceField = (name, value) => {
    return {
        type: CHANGE_SERVICE_FIELD,
        payload: { name, value }
    }
}

 