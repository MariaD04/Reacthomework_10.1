import { SET_SERVICE, REMOVE_SERVICE } from "../actions/actions"

const initialState = [
    { id: crypto.randomUUID(), name: 'Замена стекла', price: '21000' },
    { id: crypto.randomUUID(), name: 'Замена дисплея', price: '25000' },
    { id: crypto.randomUUID(), name: 'Замена аккумулятора', price: '4000' },
    { id: crypto.randomUUID(), name: 'Замена микрофона', price: '2500' }
]

const listReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_SERVICE: {
            const { id, name, price } = action.payload
            return id? 
                state.map(item => (item.id === id ? {...item, name, price} : item)) :
                [...state, { id: crypto.randomUUID(), name, price }]
        }
        case REMOVE_SERVICE: {
            const { id } = action.payload
            return state.filter(service => service.id !== id)
        }
        default:
            return state
    }
}

export default listReducer