import './TextInput.css'

export function TextInput (props) {
    return (
        <div className='text-input'>
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    );
}
