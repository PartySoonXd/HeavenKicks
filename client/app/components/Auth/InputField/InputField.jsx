export default function InputField({type, placeholder, name}) {
    return (
        <input type={type} className="input-field p" placeholder={placeholder} name={name}/>
    )
}