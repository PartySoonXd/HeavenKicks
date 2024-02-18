import PageIntro from "@/app/components/PageIntro/PageIntro";
import Feedback from "@/app/ui/Contacts/Feedback/Feedback";
import OurContacts from "@/app/ui/Contacts/OurContacts/OurContacts";

export default function Contacts() {
    return (
        <main className="content">
            <PageIntro title="Contacts" image="/contacts-intro.jpg"/> 
            <div className="contacts-container" 
                style={{
                    marginTop: "30px",
                    marginBottom: "70px",
                    display: "flex"
                }}
            >
                <OurContacts/>
                <Feedback/>
            </div>
        </main>
    )
}