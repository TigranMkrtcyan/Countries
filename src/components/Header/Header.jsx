import { API } from '../../api/api'
import { IoIosSearch } from "react-icons/io";
import { useContext } from 'react';
import { MyContext } from '../../Data/context';

import style from './Header.module.css'

const Header = () => {
  const { nav, dispatch } = useContext(MyContext)
  const Region = (reg) => {
    API.getRegion(dispatch, reg)
  }

  return (
    <div className={style.header}>
      <h1>LOGO</h1>
      <div className={style.nav}>
        <button onClick={() => API.getAll(dispatch)} className={style.btn}>All</button>
        {
          nav.map((el) => {
            return <button onClick={() => Region(el)} key={el} className={style.btn}>{el}</button>
          })
        }
      </div>
      <div>
        <IoIosSearch />
        <input type="search" />
      </div>
    </div>
  )
}

export default Header