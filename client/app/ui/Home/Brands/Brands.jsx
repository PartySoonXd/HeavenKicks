import BrandCard from "./BrandCard";

export default function Brands() {
    return (
        <div className="brands">
            <h2 className="h2 brands-title">BRANDS</h2>
            <div className="brands-cards">
                <BrandCard url="/catalog?brand=nike" brand="nike"/>
                <BrandCard url="/catalog?brand=adidas" brand="adidas"/>
                <BrandCard url="/catalog?brand=puma" brand="puma"/>
                <BrandCard url="/catalog?brand=new-balance" brand="new-balance"/>
                <BrandCard url="/catalog?brand=converse" brand="converse"/>
                <BrandCard url="/catalog?brand=vans" brand="vans"/>
                <BrandCard url="/catalog?brand=reebok" brand="reebok"/>
                <BrandCard url="/catalog?brand=crocs" brand="crocs"/>
                <BrandCard url="/catalog?brand=asics" brand="asics"/>
            </div>
        </div>
    )
}