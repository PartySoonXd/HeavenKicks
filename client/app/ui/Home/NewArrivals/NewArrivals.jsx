import NewArrivalsProducts from "@/app/components/NewArrivalsProducts/NewArrivalsProducts"
import PrettyButton from "@/app/components/PrettyButton/PrettyButton"

export default function NewArrivals() {
    return (
        <div className="new-arrivals">
            <h2 className="h2">NEW ARRIVALS</h2>
            <NewArrivalsProducts/>
            <div className="new-arrivals-pretty-button-container">
                <PrettyButton url="/new-arrivals" text="see all"/>
            </div>
        </div>
    )
}