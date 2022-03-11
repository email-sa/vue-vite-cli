import axios from 'axios'
import httpService from './axios'

const { CancelToken } = axios

export function get(url: string, query = {}, config = {}) {
    return httpService.get(url, {
        params: query,
        ...config
    })
}
export function post(url: string, data = {}, config = {}) {
    return httpService.post(url, data, config)
}
export function put(url: string, data = {}, config = {}) {
    return httpService.put(url, data, config)
}
export function del(url: string, query = {}, config = { isBody: false }) {
    if (config.isBody) {
        return httpService.delete(url, { data: query, ...config })
    }
    return httpService.delete(url, { params: query, ...config })
}
// export function delCopy(url: string, query = {}) {
//
// }
export const cancelRequest = (url: string, config: any = {}) => {
    return axios.request({
        url,
        cancelToken: new CancelToken(function executor(c) {
            config.cancel = c
        }),
        ...config
    })
}

export const down = async (url: string, name: string) => {
    const blob: any = await get(url, {}, { responseType: 'blob' })

    // downloadFile(blob, name);
}
