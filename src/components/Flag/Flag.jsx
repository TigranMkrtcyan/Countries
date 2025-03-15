import style from './Flag.module.css'

const Flag = ({ country }) => {
    return (
        <div className={style.flag}>
            <div>
                <img src={country.flags.png} alt="" className= {style.img} />
            </div>
            <h2>{country.name.common}</h2>
        </div>
    )
}

export default Flag