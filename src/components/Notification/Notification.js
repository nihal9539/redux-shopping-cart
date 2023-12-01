import React from 'react'
import { Alert } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { uiAction } from '../../store/ui-slice'

const Notification = ({ type, message }) => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ui)
    const handleclose = () => {
        dispatch(uiAction.showNotification({
            open: false
        }))
    }
    return (
        <div>
            {notification.open && <Alert onClose={handleclose} severity={type}>{message}</Alert>}
        </div>
    )
}

export default Notification
