"use client"

import IndexLayout from "@/app/components/IndexLayout/IndexLayout"
import PageIntro from "@/app/components/PageIntro/PageIntro"
import { useUserContext } from "@/app/lib/UserContext"
import Orders from "@/app/ui/Profile/Orders/Orders"

export default function ProfilePage({params}) {
    const {user} = useUserContext()
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Profile" image="/profile-intro.jpg"/>
            <Orders/>
        </main>
        </IndexLayout>
    )
}