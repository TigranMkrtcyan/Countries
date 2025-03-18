import axios from "axios"
import { getAllAC, getCountryAC, getRegionAC , getSearchAC} from "../store/store"

const instance = axios.create({
    baseURL : "https://restcountries.com/v3.1"
})

export const API = {
    getAll(dispatch) {
        instance.get("/all")         
            .then((res) => {
                const filteredData = res.data.filter(
                    (country) => country.cca2 !== "TR" && country.cca2 !== "AZ"
                );
                dispatch(getAllAC(filteredData));
            })
    },
    getRegion(dispatch , region) {
        instance.get(`/region/${region}`)
            .then((res) => dispatch(getRegionAC(res.data)))
    },
    getCountry(dispatch, name) {
        instance.get(`/name/${name}`)
            .then((res) => dispatch(getCountryAC(res.data)))
    },
    getSearch(dispatch, name) {
        instance.get(`/name/${name}`)
            .then((res) => dispatch(getSearchAC(res.data)))
    }
}