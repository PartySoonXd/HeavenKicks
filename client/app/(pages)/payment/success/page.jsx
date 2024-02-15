import Link from "next/link";

export default function PaymentSuccess() {
    return (
        <div className="payment-success">
            <h1>SUCCESS</h1>
            <Link href="/">Go to home</Link>
        </div>
    )
}