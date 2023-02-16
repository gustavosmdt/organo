import './SelectInput.css'

export function SelectInput(props) {
    return (
        <div className='select-input'>
            <label>{props.label}</label>
            <select required={props.mandatory}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}