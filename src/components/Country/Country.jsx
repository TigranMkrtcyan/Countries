import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { API } from '../../api/api'

import style from './Country.module.css'
import { MyContext } from '../../Data/context'

const Country = () => {
  const { dispatch, country } = useContext(MyContext);
  const { name } = useParams();

  useEffect(() => {
    API.getCountry(dispatch, name)
  }, []);

  if (!country || !country.length) {
    return (
      <div className={style.loading}>
        <div className={style.loadingSpinner}></div>
        Loading country information...
      </div>
    )
  }

  const newCountry = country[0];

  console.log(newCountry);

  return (
    <div className={style.country}>
      <div className= {style.flag}>
        <img src={newCountry.flags.png} alt="" className= {style.img}/>
      </div>
      <div className= {style.infos}>
          <div className= {style.common}>
            <h1 className= {style.name}>{newCountry.name.common}</h1>
          </div>
          <div className= {style.info}>
            <h2>Size - {newCountry.area}KM²</h2>
            <h2>Population - {newCountry.population}</h2>
            <h2>Region - {newCountry.region}</h2>
          </div>
          <div className= {style.map}>location - 
            <a href={newCountry.maps.googleMaps} className= {style.href}>{newCountry.maps.googleMaps}</a>
          </div>
        </div>
    </div>
  )
}

export default Country