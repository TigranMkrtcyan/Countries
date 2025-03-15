import Flag from "../../components/Flag/Flag"

import style from './Home.module.css'

const Home = ({ countries }) => {
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