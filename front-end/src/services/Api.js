import axios from "axios"

export default () => {
    return axios.create({
        baseURL:`htp://localhost:8081/`
    })
}