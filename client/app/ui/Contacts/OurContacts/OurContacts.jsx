import Image from "next/image";

export default function OurContacts() {
    return (
        <div className="contacts">
            <h2 className="h2 contacts-title">OUR CONTACTS</h2>
            <address>
                <div className="contacts-item">
                    <Image src="phone-icon.svg" width={40} height={40} alt="phone icon"/>
                    <span className="contacts-item-line"></span>
                    <a href="tel:+(123) 456 7890" className="h3 contacts-item-text">+(123) 456 7890</a>
                </div>
                <div className="contacts-item">
                    <Image src="mail-icon.svg" width={40} height={40} alt="phone icon"/>
                    <span className="contacts-item-line"></span>
                    <a href="mailto:heavenkicks@gmail.com" className="h3 contacts-item-text">heavenkicks@gmail.com</a>
                </div>
                <div className="contacts-item">
                    <Image src="location-icon.svg" width={40} height={40} alt="phone icon"/>
                    <span className="contacts-item-line"></span>
                    <span className="h3 contacts-item-text">515, Wilson Ave, Brooklyn, New York</span>
                </div>
            </address>
        </div>
    )
}