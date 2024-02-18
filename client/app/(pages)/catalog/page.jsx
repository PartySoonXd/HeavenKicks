import IndexLayout from "@/app/components/IndexLayout/IndexLayout";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Products from "@/app/ui/Catalog/Products/Products";

export default function Catalog() {
    return (
        <IndexLayout>
        <main className="content">
            <PageIntro title="Catalog" image="/catalog-intro.jpg"/>
            <Products/>
        </main>
        </IndexLayout>
    )
}