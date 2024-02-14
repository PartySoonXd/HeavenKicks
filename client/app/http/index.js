import axios from "axios";

const $apiHost = axios.create({
    baseURL: "http://127.0.0.1:1337"
})

const $authApiHost = axios.create({
    baseURL: "http://127.0.0.1:1337"
})

export {
    $apiHost,
    $authApiHost
}