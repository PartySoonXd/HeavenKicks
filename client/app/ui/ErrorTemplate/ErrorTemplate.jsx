import PrettyButton from "@/app/components/PrettyButton/PrettyButton";
import Image from "next/image";

export default function ErrorTemplate({status, text}) {
    return (
        <div className="error-template">
            <div className="error-template-info">
                <h1 className="error-template-status">{status}</h1>
                <h2 className="h2 error-template-text">{text}</h2>
                <PrettyButton url="/" text="GO TO HOMEPAGE"/> 
            </div>
            <Image src={`/error-${status}-photo.jpg`} width={1000} height={1000} alt="error page"/>
        </div>
    )
}