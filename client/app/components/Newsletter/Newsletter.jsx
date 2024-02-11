export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newletter-container">
                <h1>Newsletter</h1>
                <form>
                    <input type="email" placeholder="email"/>
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )
}