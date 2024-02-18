import PageIntro from "@/app/components/PageIntro/PageIntro";
import Questions from "@/app/ui/FAQ/Questions/Questions";
import Link from "next/link";

export default function FAQ() {
    return (
        <main className="content">
            <PageIntro title="FAQ" image="/faq-intro.jpg"/>
            <Questions/>
            <h2 className="h2" style={{color: "#27475f", fontWeight: 400, marginBottom: "70px"}}>
                Still have questions? <Link href="/contacts" style={{color: "#60B3FF", textDecoration: "underline"}}>Ask here</Link>
            </h2>
        </main>
        
    )
}