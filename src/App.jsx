import { useEffect, useReducer } from 'react'
import { initState, reducer } from './store/store'
import { API } from './api/api'

import Home from './pages/Home/Home'
import Header from './components/Header/Header'

import './App.css'

function App({ data }) {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll(dispatch)
  }, [])
  console.log(state);

  return (
    <div className='app'>
      <Header nav={data.nav} dispatch={dispatch}/>
      <Home countries={state.countries} />
    </div>
  )
}

export default App
