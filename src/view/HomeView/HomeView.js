import React from 'react'
import {useLocation} from 'react-router-dom'

export const HomeView=() =>{
    const location = useLocation()
    return (
        <div>
            State: {location.state}
        </div>
    )
}
