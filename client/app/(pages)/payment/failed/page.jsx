import Link from "next/link";

export default function PaymentFailed() {
    return (
        <div className="payment-failed">
            <h1>FAILED</h1>
            <Link href="/">Go to home</Link>
        </div>
    )
}