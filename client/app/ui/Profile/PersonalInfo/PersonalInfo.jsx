"use client"

export default function PersonalInfo ({username, email, logout}) {
    
    return (
        <div className="personal-info">
            <h2 className="h2">PERSONAL INFO</h2>
            <h3 className="h3">Username: <p className="h4">{username}</p></h3>
            <h3 className="h3">Email: <p className="h4">{email}</p></h3>
            <button 
                    type="button"
                    onClick={logout}
                    className="logout-button links"
            >LOGOUT</button>
        </div>
    )
}