import request from '../utils/request'

const url = 'https://www.easy-mock.com/mock'

const homeApi = {
    login(dataObj) {
        console.log(dataObj)
        return request.networkpost({
            url: `${url}/5d6874546d1ba0766849df36/example/shishi`,
            headers: '',
            data: dataObj,
        })
    }
}

export default homeApi