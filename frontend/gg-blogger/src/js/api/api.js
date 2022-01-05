import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000', 
    timeout: 600000
})

export const req = Object.freeze({
    post: function (url, data = null) {
        return api.post(url, data)
    }, 
    get: function (url, data = null) {
        return api.get(url, { params: data })
    }, 
    delete: function (url, data = null) {
        return api.delete(url, { params: data })
    },
    put: function (url, data = null) {
        return api.put(url, data)
    },
    patch: function (url, data = null) {
        return api.patch(url, data)
    }
})
