import React from 'react'
import {Routes} from './routes/Routes'
import {DesktopNavigation} from './components/DesktopNavigation/navigation/DesktopNavigation'
import {UserProvider} from './provider/UserProvider'
import '../src/global/global.css'


export const App = () =>{
  return(
    <UserProvider>
    <Routes>
      <DesktopNavigation />
    </Routes>
    </UserProvider>
  )
}
