import SignUpForm from "@/app/ui/Auth/SignUp/SignUpForm";
import Image from "next/image";

export default function SignUp() {
    const styles = {
        display: "flex",
        alignItems: "center",
    }
    return (
        <main className="content" style={{maxHeight: "100vh", margin: "auto 0"}}>
            <div 
                className="container" 
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <SignUpForm/>
                <Image 
                    src="/sign-up-photo.jpg" 
                    width={919} 
                    height={900} 
                    style={{
                        maxWidth: "900px", 
                        height: "auto"
                    }}
                    alt="sign up photo"
                />
            </div>
        </main>
    )
}