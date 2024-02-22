"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useUserContext } from "@/app/lib/UserContext"

export default function Header() {
    const {user} = useUserContext()
    const [isActive, setIsActive] = useState(false)
    return (
        <header className="header">
            <div className={`header-hamburger ${isActive && "active"}`} onClick={() => setIsActive(!isActive)}>
                <span className="header-hamburger-element"></span>
                <span className="header-hamburger-element"></span>
                <span className="header-hamburger-element"></span>
            </div>
            <div className="header-logo">
                <Link href="/">
                    <Image src="/Logo.svg" width={292} height={50} alt="HeavenKicks logo" className="header-logo-img"/>                    
                    <Image src="/Logo-mobile.svg" width={98} height={50} alt="HeavenKicks logo" className="header-logo-img mobile"/>
                </Link>
            </div>
            <nav className={`header-nav ${isActive && "active"}`}>
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <Link href="/catalog" className="links">Catalog</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link href="/new-arrivals" className="links">New arrivals</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link href="/contacts" className="links">Contacts</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link href="/faq" className="links">FAQ</Link>
                    </li>
                </ul>
                {
                    user.isAuth != true ? 
                    <div className="separate-links">
                        <Link href="/sign-in" className="auth-button sign-in-btn links">Sign in</Link>
                        <Link href="/sign-up" className="auth-button sign-up-btn links">Sign up</Link>
                    </div>
                    :
                    <div className="separate-links">
                        <Link href="/cart" className="authenticated-link">
                            <Image src="/cart-icon.svg" width={35} height={35} alt="cart icon"/>
                        </Link>
                        <Link href={`/profile/${user.user.uuid}`} className="authenticated-link">
                            <Image src="/profile-icon.svg" width={35} height={35} alt="profile icon"/>
                        </Link>
                    </div>
                }
            </nav>
        </header>
    )
}