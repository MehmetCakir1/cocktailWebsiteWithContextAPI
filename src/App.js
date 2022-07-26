import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AppRouter from './router/AppRouter'
import DataContextProvider from "./context"

const App = () => {
  return (
    <div>
      <DataContextProvider>
        <AppRouter/>
      </DataContextProvider>
    </div>
  )
}

export default App