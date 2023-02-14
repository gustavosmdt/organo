import './SelectInput.css'

export function SelectInput(props) {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    );
}