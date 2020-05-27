import axios from 'axios'

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
    console.log('SetAuthHeader Added')
  } else {
    delete axios.defaults.headers.common['x-auth-token']
    console.log('SetAuthHeader Deleted')
  }
}

export default setAuthToken
