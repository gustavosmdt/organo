import './Button.css';

export function Button(props){
    return (
        <button className='input-button'>
            {props.children}
        </button>
    )
}