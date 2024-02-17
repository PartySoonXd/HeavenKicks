export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter-container">
                <h3 className="h3 newsletter-title">Get info about <span>new arrivals</span> and <span>discounts</span></h3>
                <form>
                    <input type="email" placeholder="email" className="newsletter-input p"/>
                    <button type="submit" className="newsletter-btn links">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )
}