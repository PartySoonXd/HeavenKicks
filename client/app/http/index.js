import axios from "axios";

const $apiHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ASSETS_URL
})

const $authApiHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ASSETS_URL
})

export {
    $apiHost,
    $authApiHost
}