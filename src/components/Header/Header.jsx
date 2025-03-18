import { API } from '../../api/api'
import { IoIosSearch } from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Data/context';
import { changeTextAC } from '../../store/store';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css'
const Header = () => {

  const { nav, dispatch, search, text } = useContext(MyContext)

  const [isopen, setOpen] = useState(false)

  const Region = (reg) => {
    API.getRegion(dispatch, reg)
  }

  useEffect(() => {
    if (text.length > 2) {
      API.getSearch(dispatch, text)
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [text])

  return (
    <div className={style.header}>
      <NavLink to='/'>
        <h1>LOGO</h1>
      </NavLink>
      <div className={style.nav}>
        <button onClick={() => API.getAll(dispatch)} className={style.btn}>All</button>
        {
          nav.map((el) => {
            return <button onClick={() => Region(el)} key={el} className={style.btn}>{el}</button>
          })
        }
      </div>
      <div className={style.search}>
        <IoIosSearch />
        <input type="search" value={text} onChange={(e) => dispatch(changeTextAC(e.target.value))} />
        {
          isopen && <div className={style.searchBlock}>
            {
              search.map((el) => {
                return <NavLink to={`/flag/${el.name.common}`} key={el.name.common}>
                  <div>{el.name.common}</div>
                </NavLink>
              })
            }
          </div>}
      </div>
    </div>
  )
}

export default Header