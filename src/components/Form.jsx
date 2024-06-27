import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setService, cancelServiceField, changeServiceField } from '../redux/actions/actionCreator'

export const Form = () => {
    const dispatch = useDispatch()
    const item = useSelector((state) => state.form)
    let isEdit = !!item.id

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setService(item.id, item.name, item.price))
        dispatch(cancelServiceField())
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch(changeServiceField(name, value))
    }

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(cancelServiceField())
    }

    return (
        <form className='form-container' onSubmit={handleSubmit} onReset={handleCancel}>
            <input 
                className='input-name' 
                name="name" 
                value={item.name} 
                onChange={handleChange} 
                required 
            /> 
            <input 
                className='input-price' 
                name="price" 
                value={item.price} 
                onChange={handleChange} 
                required 
            /> 
            <button type='submit'>Save</button>
            { isEdit && <button type='reset'>Cancel</button> }
        </form>   
    )
}

export default Form
