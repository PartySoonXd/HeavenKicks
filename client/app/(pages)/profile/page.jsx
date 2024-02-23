"use client"

import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useUserContext } from "@/app/lib/UserContext"

import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import PageIntro from "@/app/components/PageIntro/PageIntro"
import navigate from "@/app/lib/navigate"
import Orders from "@/app/ui/Profile/Orders/Orders"
import { deleteToken } from "@/app/lib/tokenHandler"

export default observer(function ProfilePage() {
    const {user} = useUserContext()
    useEffect(() => {
        if (!user.isAuth) {
            navigate('/error/404')
        }
    }, [])
    const logout = async () => {
        await deleteToken()
        navigate("/")
        user.setIsAuth(false)
    }
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Profile" image="/profile-intro.jpg"/>
            {user.isAuth && <Orders orders={user.user.orders}/>}
            <button 
                type="button"
                onClick={logout}
                className="logout-button links"
            >LOGOUT</button>
        </main>
        </IndexLayout>
    )
})