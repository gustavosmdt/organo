import './Collaborator.css';

export function Collaborator({name, agent, image}) {

    return (
        <div className='collaborator'>
            <div className='header'>
                <img src={image} alt={name}></img>
            </div>
            <div className='card-footer'>
                <h4>{name}</h4>
                <h5>{agent}</h5>
            </div>
        </div>
    )
}