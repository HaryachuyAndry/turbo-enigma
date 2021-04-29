export const getQuery = (options = {}) => {
    return new URLSearchParams(options).toString()
}