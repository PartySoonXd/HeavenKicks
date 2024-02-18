import PaymentTemplate from "@/app/ui/PaymentTemplate/PaymentTemplate";
import Link from "next/link";

export default function PaymentSuccess() {
    return (
        <PaymentTemplate status="Success!" component={
            <div className="h1">You can check your order in <a href="/contacts">profile</a></div>
        }/>
    )
}