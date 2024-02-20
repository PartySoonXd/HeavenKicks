import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

export default function ProductLayout({children}) {
    return (
        <>
            <div className="container">
                <Header/>
                {children}
            </div>
            <Footer/>
        </>
    )
}