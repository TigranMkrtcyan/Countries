import { useEffect, useReducer } from 'react'
import { initState, reducer } from './store/store'
import { API } from './api/api'

import Home from './pages/Home/Home'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MyContext } from './Data/context'
import Layout from './components/Layout/Layout'
import Country from './components/Country/Country'

function App({ data }) {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll(dispatch)
  }, [])

  return (
    <div className='app'>
      <MyContext.Provider
        value={{
          nav : data.nav,
          dispatch,
          countries : state.countries,
          country : state.country
        }}
      >
      <Routes>
        <Route path='/' element = {<Layout />} >
        <Route index element = {<Home />}/> 
        <Route path='/flag/:name' element={<Country />}/>
        </Route>
      </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App
