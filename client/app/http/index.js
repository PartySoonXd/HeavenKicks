import axios from "axios";

const $apiHost = axios.create({
    baseURL: "http://localhost:1337"
})

const $authApiHost = axios.create({
    baseURL: "http://localhost:1337"
})

export {
    $apiHost,
    $authApiHost
}