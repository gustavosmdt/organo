import Collaborator from '../Collaborator';
import './Team.css';

export function Team(props) {

    const colorSecondary = { background: props.colorSecondary };
    const colorPrimary = { border: props.colorPrimary };
    
    return (
        props.collaborators.length > 0 && 
        <section className='team' style={colorSecondary}>
            <h3 style={colorPrimary}>
                {props.name}
            </h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator 
                    color={props.colorPrimary}
                    key={collaborator.name}
                    name={collaborator.name} 
                    agent={collaborator.agent}
                    image={collaborator.image}
                />)}
            </div>
        </section>
    )

}