import { API } from '../../api/api'

import style from './Header.module.css'

const Header = ({nav , dispatch}) => {

  const Region = (reg) => {
    API.getRegion(dispatch, reg)
  }

  return (
    <div className= {style.header}>
      <h1>LOGO</h1>
      <div className= {style.nav}> 
         <button onClick={() => API.getAll(dispatch)} className= {style.btn}>All</button>
        {
            nav.map((el) => {
                return <button onClick={() => Region(el)} key={el} className= {style.btn}>{el}</button>
            })
        }
      </div>
        <input type="search" />
    </div>
  )
}

export default Header