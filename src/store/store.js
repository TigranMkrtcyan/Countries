const GET_ALL = "all"
const GET_REGION = 'region'

export const initState = {
    countries: [],
}

export const reducer = (initState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...initState,
                countries : action.payload
            }
        case GET_REGION :
            return {
                ...initState,
                countries : action.payload
            }
        default:
            return initState
    }
}

export const getAllAC = (data) => ({type: GET_ALL , payload : data})
export const getRegionAC = (reg) => ({type: GET_REGION , payload : reg})
