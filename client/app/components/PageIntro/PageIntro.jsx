import Image from "next/image";

export default function PageIntro({title, image}) {
    return (
        <div className="page-intro">
            <h1 className="h1">{title}</h1>
            <Image src={image} width={530} height={300} alt={`${title} intro`}/>
        </div>
    )
}