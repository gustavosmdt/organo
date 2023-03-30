import './Collaborator.css';

export function Collaborator({name, agent, image, color}) {

    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: color }}>
                <img src={image} alt={name}></img>
            </div>
            <div className='card-footer'>
                <h4>{name}</h4>
                <h5>{agent}</h5>
            </div>
        </div>
    )
}