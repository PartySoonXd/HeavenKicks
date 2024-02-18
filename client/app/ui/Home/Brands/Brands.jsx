import BrandCard from "./BrandCard";

export default function Brands() {
    return (
        <div className="brands">
            <h2 className="h2 brands-title">BRANDS</h2>
            <div className="brands-cards">
                <BrandCard url="/catalog" brand="nike"/>
                <BrandCard url="/catalog" brand="adidas"/>
                <BrandCard url="/catalog" brand="puma"/>
                <BrandCard url="/catalog" brand="new-balance"/>
                <BrandCard url="/catalog" brand="converse"/>
                <BrandCard url="/catalog" brand="vans"/>
                <BrandCard url="/catalog" brand="reebok"/>
                <BrandCard url="/catalog" brand="crocs"/>
                <BrandCard url="/catalog" brand="asics"/>
            </div>
        </div>
    )
}