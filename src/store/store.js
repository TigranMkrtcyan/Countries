const GET_ALL = "all"
const GET_REGION = 'region'
const GET_COUNTRY = 'country'
const CHANGE_TEXT = 'change'
const GET_SEARCH = 'search'

export const initState = {
    countries: [],
    country: [],
    text: "",
    search: []
}


export const reducer = (initState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...initState,
                countries: action.payload
            }
        case GET_REGION:
            return {
                ...initState,
                countries: action.payload
            }
        case GET_COUNTRY:
            return {
                ...initState,
                country: action.payload
            }
        case CHANGE_TEXT:
            return {
                ...initState,
                text: action.payload
            }            
        case GET_SEARCH:
            return {
                ...initState,
                search : action.payload
            }
        default:
            return initState
    }
}

export const getAllAC = (data) => ({ type: GET_ALL, payload: data })
export const getRegionAC = (reg) => ({ type: GET_REGION, payload: reg })
export const getCountryAC = (count) => ({ type: GET_COUNTRY, payload: count })
export const changeTextAC = (text) => ({ type: CHANGE_TEXT, payload: text })
export const getSearchAC = (data) => ({ type: GET_SEARCH, payload: data })


