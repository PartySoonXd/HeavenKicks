import PrettyButton from "@/app/components/PrettyButton/PrettyButton";

export default function PaymentTemplate({status, component}) {
    return (
        <div className="payment-template">
            <h1 className="payment-template-status">{status}</h1>
            {component}
            <PrettyButton url="/" text="GO TO HOMEPAGE"/>
        </div>
    )
}