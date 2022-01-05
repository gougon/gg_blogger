import { req } from './api'

export const getAllPost = () => {
    return req.get('post')
}
