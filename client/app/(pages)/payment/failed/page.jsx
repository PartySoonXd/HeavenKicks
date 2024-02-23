"use client"

import { useEffect } from "react";

import { $apiHost } from "@/app/http";
import PaymentTemplate from "@/app/ui/PaymentTemplate/PaymentTemplate";
import { getToken } from "@/app/lib/tokenHandler";
import { useSearchParams } from "next/navigation";

export default function PaymentFailed() {
    const params = useSearchParams()
    useEffect(() => {
        const updateData = async () => {
            try {
                const sessionId = params.get('session_id')
                const token = await getToken()
    
                const {data} = await $apiHost.get(`/api/orders?filters[sessionId][$eq]=${sessionId}`, {
                    headers: {Authorization: `Bearer ${token.value}`}
                })
                await $apiHost.put(`/api/orders/${data.data[0].id}`, {
                    data: {
                        status: "canceled"
                    }
                }, {
                    headers: {Authorization: `Bearer ${token.value}`}
                })
            }   
            catch (error) {
                console.log(error)
            }
        }
        updateData()
    }, [])
    return (
        <PaymentTemplate status="Failed!" component={
            <div className="h1">Payment unsuccessful. Try later.</div>
        }/>
    )
}