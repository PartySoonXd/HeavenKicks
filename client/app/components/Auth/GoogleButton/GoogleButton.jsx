import { $apiHost } from "@/app/http";
import navigate from "@/app/lib/navigate";
import Image from "next/image";

export default function GoogleButton () {
    const googleInit = async() => {
        await $apiHost.get("/strapi-google-auth/init").then(({data}) => {
            navigate(data.url, "replace")
        })
    }
    return (
        <button type="button" onClick={googleInit} className="google-button h3">
            continue with
            <Image src="google-icon.svg" width={40} height={40} alt="google logo"/>
        </button>
    )
}