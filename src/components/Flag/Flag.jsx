import { NavLink } from 'react-router-dom'
import style from './Flag.module.css'

const Flag = ({ country }) => {
    return (
        <>
        <NavLink to={`/flag/${country.name.common}`} >
        <div className={style.flag}>
            <div>
                <img src={country.flags.png} alt="" className= {style.img} />
            </div>
            <h2>{country.name.common}</h2>
        </div>
        </NavLink>
        </>
    )
}

export default Flag