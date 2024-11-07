import SignUpForm from "@/app/ui/Auth/SignUp/SignUpForm";
import Image from "next/image";

export default function SignUp() {
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
                    src="/sign-up-photo.webp" 
                    width={919} 
                    height={900} 
                    alt="sign up photo"
                    className="auth-image"
                />
            </div>
        </main>
    )
}