import Link from "next/link"

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link href="/">LOGO</Link>
            </div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <Link href="/catalog">Catalog</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link href="/new-arrivals">New arrivals</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link href="/contacts">Contacts</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link href="/faq">FAQ</Link>
                    </li>
                </ul>
            </nav>
            <div className="auth-container">
                <Link href="/sign-in">Sign in</Link>
                <Link href="/sign-up">Sign up</Link>
            </div>
        </header>
    )
}