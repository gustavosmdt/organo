import './TextInput.css'

export function TextInput (props) {

    const whenTyped = (event) => {
        props.whenEdited(event.target.value);
    }

    return (
        <div className='text-input'>
            <label>
                {props.label}
            </label>
            <input
                value={props.value}
                onChange={whenTyped}
                required={props.mandatory}
                placeholder={props.placeholder}
            />
        </div>
    );
}
