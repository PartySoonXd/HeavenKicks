import UserProvider from "@/app/components/UserProvider/UserProvider"

export default function AuthLayout({children}) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}