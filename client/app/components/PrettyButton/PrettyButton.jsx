import Link from "next/link";

export default function PrettyButton({url, text}) {
    return (
        <Link href={url} className="pretty-button links">
            {text}
        </Link>
    )
}