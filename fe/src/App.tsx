import React from 'react'
import RoutesJS from './Routes'
import { AuthProvider } from './context/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <RoutesJS />
    </AuthProvider>
  )
}

export default App