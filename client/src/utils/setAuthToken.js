import axios from 'axios' //not making a request but adding a global header


const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}
//sends token with every request

export default setAuthToken