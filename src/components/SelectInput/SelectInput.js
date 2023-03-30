import './SelectInput.css'

export function SelectInput(props) {
    
    return (
        <div className='select-input'>
            <label>{props.label}</label>
            <select
                onChange={event => props.whenEdited(event.target.value)}
                required={props.mandatory}
                value={props.value}>
                <option key="Selecione" value="Selecione">Selecione</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}