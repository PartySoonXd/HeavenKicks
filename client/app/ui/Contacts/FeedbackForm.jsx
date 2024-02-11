export default function FeedbackForm() {
    return (
        <form>
            <input type="email" placeholder="email"/>
            <textarea placeholder="Your question" cols="30" rows="10"></textarea>

            <button type="submit">SUBMIT</button>
        </form>
    )
}