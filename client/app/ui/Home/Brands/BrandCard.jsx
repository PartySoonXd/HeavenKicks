import Link from "next/link"

export default function BrandCard({item}) {
    return (
        <Link href={`/catalog?brand=${item.attributes.category.data.attributes.slug}`} className="brand-card">
            <div className="left-side">
                <img 
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + item.attributes.logo.data.attributes.url} 
                    alt={`${item.attributes.category.data.attributes.name} logo`}
                />
                <div className="see-all">
                    <div className="see-all-text links">See all</div>
                    <span className="see-all-line"></span>
                </div>
            </div>
            <div className="right-side">
                <img 
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + item.attributes.sneaker.data.attributes.url} 
                    width={220} 
                    height={200} 
                    alt={`${item.attributes.category.data.attributes.name} sneakers`}
                />
            </div>
        </Link>
    )
}