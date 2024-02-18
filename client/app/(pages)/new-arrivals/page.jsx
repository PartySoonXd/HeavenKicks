import PageIntro from "@/app/components/PageIntro/PageIntro";
import NewArrivalsProducts from "@/app/components/NewArrivalsProducts/NewArrivalsProducts";
import PrettyButton from "@/app/components/PrettyButton/PrettyButton";
import IndexLayout from "@/app/components/IndexLayout/IndexLayout";

export default function NewArrivals() {
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="New arrivals" image="/new-arrivals-intro.jpg"/>
            <div className="new-arrivals-container" style={{margin: "30px 0 40px 0"}}>
                <NewArrivalsProducts/>
            </div>
            <div className="new-arrivals-button-container" style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "70px"
            }}>
                <PrettyButton url="/catalog" text="GO TO CATALOG"/>
            </div>
        </main>
        </IndexLayout>
    )
}