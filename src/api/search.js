import axios from "./axios"
import { getQuery } from "./helper"

export const getSearchMovies = (options = {}) => {
    const queryParams = {
        api_key: "bc67839fc24f57d84320a8adc51a538d",
        language: "en-US",
        page: 1,
        ...options
    }
    return axios.get(`3/search/movie?${getQuery(queryParams)}`)
}