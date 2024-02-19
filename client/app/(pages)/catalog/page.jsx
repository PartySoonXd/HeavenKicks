import IndexLayout from "@/app/components/IndexLayout/IndexLayout";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/components/Products/Products";
import Filters from "@/app/ui/Catalog/Filters/Filters";
import Options from "@/app/ui/Catalog/Options/Options";

export default function Catalog() {
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.jpg"/>
            <div className="catalog-container" style={{display: "flex", margin: "30px 0 50px 0"}}>
                <div className="left-container" style={{flexGrow: 1}}>
                    <Filters/>
                </div>
                <div className="right-container" style={{
                    maxWidth: "1025px",
                    width: "100%",
                }}>
                    <Options/>
                    <Products className="catalog"/>
                </div>
            </div>
        </main>
        </IndexLayout>
    )
}