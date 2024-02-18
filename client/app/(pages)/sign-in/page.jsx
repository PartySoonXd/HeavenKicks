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
                    src="/sign-in-photo.jpg" 
                    width={919} 
                    height={900} 
                    style={{
                        maxWidth: "900px", 
                        height: "auto"
                    }}
                    alt="sign in photo"
                />
            </div>
        </main>
    )
}