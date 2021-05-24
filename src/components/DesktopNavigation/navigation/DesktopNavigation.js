import React from 'react'
import {useHistory} from 'react-router-dom'

export const DesktopNavigation = () => {
    const history = useHistory()
    return (
        <div className="navigationBarWrapper">
            <span className="homeView" onClick={() => history.push('/HomeView', 'Homey View')}>HomeView</span>
            <span className="dataView" onClick={() => history.push('/DataView', 'Dataisch View')}>DataView</span>

        </div>
        
    )
}


