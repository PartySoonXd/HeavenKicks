export default function Notification({isActive, title, text}) {
    return (
        <div className={`notification ${isActive && "active"}`}>
            <div className="notification-container">
                <h3 className="notification-title h3">{title}</h3>
                <p className="notification-text links">{text}</p>
                <div className={`notification-lifetime ${isActive && "active"}`}></div>
            </div>
        </div>
    )
}