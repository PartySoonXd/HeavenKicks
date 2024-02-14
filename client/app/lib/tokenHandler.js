"use server"

import { cookies } from "next/headers"

export async function setToken(token) {
    cookies().set("token", token, {httpOnly: true})
}

export async function getToken() {
    return cookies().get("token")
}

export async function deleteToken() {
    cookies().delete("token")
}