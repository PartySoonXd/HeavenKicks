import PaymentTemplate from "@/app/ui/PaymentTemplate/PaymentTemplate";
import Link from "next/link";

export default function PaymentFailed() {
    return (
        <PaymentTemplate status="Failed!" component={
            <div className="h1">Payment unsuccessful. Try later.</div>
        }/>
    )
}