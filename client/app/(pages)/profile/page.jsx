"use client"

import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useUserContext } from "@/app/lib/UserContext"

import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import PageIntro from "@/app/components/PageIntro/PageIntro"
import navigate from "@/app/lib/navigate"
import Orders from "@/app/ui/Profile/Orders/Orders"
import { deleteToken, getToken } from "@/app/lib/tokenHandler"
import PersonalInfo from "@/app/ui/Profile/PersonalInfo/PersonalInfo"

export default observer(function ProfilePage() {
    const {user} = useUserContext()
    useEffect(() => {
        const authCheck = async () => {
            const token = await getToken()
            if (!user.isAuth && token.value == "") {
                navigate('/error/404')
            }
        }
        authCheck()
    }, [])
    const logout = async () => {
        await deleteToken()
        navigate("/")
        user.setIsAuth(false)
    }
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Profile" image="/profile-intro.webp"/>
            {user.isAuth && 
            <>
                <PersonalInfo username={user.user.username} email={user.user.email} logout={logout}/>
                <Orders orders={user.user.orders}/>
            </>}
        </main>
        </IndexLayout>
    )
})