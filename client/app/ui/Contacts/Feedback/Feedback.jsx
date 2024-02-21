export default function Feedback() {
    return (
        <div className="feedback">
            <h2 className="h2 feedback-title">GET IN TOUCH</h2>
            <form className="feedback-form">
                <textarea placeholder="Your question" className="p feedback-form-textarea"></textarea>
                <input type="email" placeholder="email" className="p feedback-form-input"/>
                <button type="submit" className="feedback-form-button links">SUBMIT</button>
            </form>
        </div>
    )
}