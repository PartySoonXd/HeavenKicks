"use client"

import PrettyButton from "@/app/components/PrettyButton/PrettyButton";
import { $apiHost } from "@/app/http";
import { useUserContext } from "@/app/lib/UserContext";
import { getToken } from "@/app/lib/tokenHandler";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export default observer(function PaymentTemplate({status, component}) {
    const {user} = useUserContext()

    useEffect(() => {
        const authUser = async() => {
            const token = await getToken()
            await $apiHost.get("/api/users/me", {headers: 
                {Authorization: `Bearer ${token.value}`}
            }).then(({data}) => {
                user.setUser(data)
                user.setIsAuth(true)
            })
        }
        authUser()
    }, [])
    if (user.isAuth) {

        return (
            <div className="payment-template">
                <h1 className="payment-template-status">{status}</h1>
                {component}
                <PrettyButton url="/" text="GO TO HOMEPAGE"/>
            </div>
        )
    }
})