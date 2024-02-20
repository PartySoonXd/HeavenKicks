import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Link href="/">
                    <Image src="/Logo.svg" width={292} height={50} alt="HeavenKicks logo"/>                    
                </Link>
            </div>
            <nav className="header-nav">
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
            </nav>
            <div className="separate-links">
                <Link href="/sign-in" className="auth-button sign-in-btn links">Sign in</Link>
                <Link href="/sign-up" className="auth-button sign-up-btn links">Sign up</Link>
            </div>
            {/* <div className="separate-links">
                <Link href="/cart">Cart</Link>
            </div> */}
        </header>
    )
}