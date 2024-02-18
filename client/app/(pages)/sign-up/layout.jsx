import UserProvider from "@/app/components/UserProvider/UserProvider"

export default function AuthLayout({children}) {
    return (
        <UserProvider>
            <h1>AUTH LAYOUT</h1>
            {children}
        </UserProvider>
    )
}