const apiBase = 'api'
const apiVersion = 'v1'

export const ApiAddress = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    REGISTER: 'register',
    PASSWORD: 'password',
}

Object.keys(ApiAddress).forEach((key) => {
    ApiAddress[key] = `${apiBase}/${apiVersion}/${ApiAddress[key]}`
})
