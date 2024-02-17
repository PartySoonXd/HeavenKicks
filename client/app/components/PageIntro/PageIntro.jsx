import Image from "next/image";

export default function PageIntro({title, image, className=""}) {
    return (
        <div className={`page-intro${className}`}>
            <h1 className="h1">{title}</h1>
            <Image src={image} width={530} height={300} alt={`${title} intro`}/>
        </div>
    )
}