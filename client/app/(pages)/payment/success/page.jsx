"use client"

import { useUserContext } from "@/app/lib/UserContext";
import PaymentTemplate from "@/app/ui/PaymentTemplate/PaymentTemplate";
import Link from "next/link";

export default function PaymentSuccess() {
    const {user} = useUserContext()

    return (
        <PaymentTemplate status="Success!" component={
            <div className="h1">You can check your order in <Link href={`/profile/${user.user.uuid}`}>profile</Link></div>
        }/>
    )
}