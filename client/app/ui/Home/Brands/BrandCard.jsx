import Image from "next/image"
import Link from "next/link"

export default function BrandCard({url, brand}) {
    return (
        <Link href={url} className="brand-card">
            <div className="left-side">
                <img src={`/logos/${brand}.png`} alt={`${brand} logo`}/>
                <div className="see-all">
                    <div className="see-all-text links">See all</div>
                    <span className="see-all-line"></span>
                </div>
            </div>
            <div className="right-side">
                <Image src={`/kicks-photos/${brand}.jpg`} width={220} height={200} alt={`${brand} sneakers`}/>
            </div>
        </Link>
    )
}