import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editService, removeService, cancelServiceField } from '../redux/actions/actionCreator'

export const List = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.list)

    const handleEdit = (item) => {
        dispatch(editService(item))
    }

    const handleRemove = (id) => {
        dispatch(removeService(id))
        dispatch(cancelServiceField())
    }

    return (
        <div className='list-container'>
           <ul>
            {items.map(item => (
                <li key={item.id}>
                    <div className='item-data'>{item.name} {item.price}</div>
                    <button className='button button-edit' onClick={() => handleEdit(item)}>✎</button>
                    <button className='button button-remove' onClick={() => handleRemove(item.id)}>✘</button>
                </li>
            ))}
           </ul> 
        </div>
    )
}

export default List