"use client"

import { UserContext } from "@/app/lib/UserContext";
import UserStore from "@/app/store/userStore";

export default function UserProvider({children}) {
    return (
        <UserContext.Provider
            value={{user: new UserStore()}}
        >
            {children}
        </UserContext.Provider>
    )
}