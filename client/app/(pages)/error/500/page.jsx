import ErrorTemplate from "@/app/ui/ErrorTemplate/ErrorTemplate";

export default function Error500() {
    return (
        <ErrorTemplate status={500} text="Something wrong"/>
    )
}