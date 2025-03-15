import { useContext } from "react"
import Flag from "../../components/Flag/Flag"

import style from './Home.module.css'
import { MyContext } from "../../Data/context"

const Home = () => {
    const { countries } = useContext(MyContext)

    return (
        <div className= {style.home}>
            {
                countries.map((el) => {       
                    return <Flag country = {el} key = {el.name.common}/> 
                })
            }
        </div>
    )
}

export default Home