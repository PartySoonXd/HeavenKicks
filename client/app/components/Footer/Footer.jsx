import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <Image src="/Footer-logo.png" width={377} height={300} alt="Footer logo"/>
                </div>
                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h3 className="footer-title h3">Menu</h3>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/" className="h4 footer-nav-link">Home</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/catalog" className="h4 footer-nav-link">Catalog</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/faq" className="h4 footer-nav-link">FAQ</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/contacts" className="h4 footer-nav-link">Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="footer-contacts">
                    <h3 className="footer-title h3">Contacts</h3>
                    <address className="contacts-container">
                        <ul className="footer-contacts-list">
                            <li className="footer-contacts-item">
                                <Image src="/phone-icon.svg" width={30} height={30} alt="phone icon"/>
                                <a href="tel:+(123) 456 7890" className="footer-contacts-text h4">+(123) 456 7890</a>
                            </li>
                            <li className="footer-contacts-item">
                                <Image src="/mail-icon.svg" width={30} height={30} alt="mail icon"/>
                                <a href="mailto:heavenkicks@gmail.com" className="footer-contacts-text h4">heavenkicks@gmail.com</a>
                            </li>
                            <li className="footer-contacts-item">
                                <Image src="/location-icon.svg" width={30} height={30} alt="location icon"/>
                                <span className="footer-contacts-text h4">515, Wilson Ave, Brooklyn, New York</span>
                            </li>
                        </ul>
                    </address>
                </div>
            </div>
        </footer>
    )
}