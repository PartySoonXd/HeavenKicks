"use server"

import { redirect } from "next/navigation";
import { $apiHost } from ".";

export const signIn = async(data) => {
    const user = await $apiHost.post("/api/auth/local", data)

    return user.data
}

export const signUp = async(data) => {
    const user = await $apiHost.post("/api/auth/local/register", data)

    return user.data
}

export const googleAuth = async() => {
    await $apiHost.get("/strapi-google-auth/init").then(({data}) => {
        redirect(data.url, "replace")
    })
}