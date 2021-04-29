import axios from "./axios"
import { getQuery } from "./helper"

export const getFilm = (id, options = {}) => {
    const queryParams = {
        api_key: "bc67839fc24f57d84320a8adc51a538d",
        language: "en-US",
        ...options
    }
    return axios.get(`3/movie/${id}?${getQuery(queryParams)}`)
}
