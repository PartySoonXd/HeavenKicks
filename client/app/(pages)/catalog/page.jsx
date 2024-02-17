import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/ui/Catalog/Products/Products";

export default function Catalog() {
    return (
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.jpg"/>
            <Products/>
        </main>
    )
}