import SignInForm from "@/app/ui/Auth/SignIn/SignInForm";
import Image from "next/image";

export default function SignIn() {
    return (
        <main className="content" style={{maxHeight: "100vh", margin: "auto 0"}}>
            <div 
                className="container" 
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <SignInForm/>
                <Image
                    src="/sign-in-photo.webp" 
                    width={919} 
                    height={900} 
                    alt="sign in photo"
                    className="auth-image"
                />
            </div>
        </main>
    )
}