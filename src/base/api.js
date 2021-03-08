const baseApi = 'https://www.datnikon.com/api/';
import constants from '../base/constants';
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        fetch(`${baseApi}${url}`, { headers: params })
            .then(response => response.json())
            .then(data => {
                if (data.status != 200) {
                    throw Error(data.message);
                }
                resolve(JSON.stringify(data.data));
            }).catch(err => {
                alert(err);
                reject();
            });
    })
}
export function post(url, params) {
    const token = localStorage.getItem(constants.LOCAL_STORAGE_TOKEN);
    if (!token) {
        return new Promise.reject(constants.DO_NOT_HAVE_PERMISSON_MESSAGE);
    }
    return new Promise((resolve, reject) => {
        fetch(`${baseApi}${url}`, { method: 'POST', body: params })
            .then(response => response.json())
            .then(data => {
                if (data.status != 200) {
                    throw Error(data.message);
                }
                resolve(data);
            }).catch(err => {
                alert(err);
                reject();
            });
    })
}