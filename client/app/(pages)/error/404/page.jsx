import ErrorTemplate from "@/app/ui/ErrorTemplate/ErrorTemplate";

export default function Error404() {
    return (
        <ErrorTemplate status={404} text="Page not found"/>
    )
}