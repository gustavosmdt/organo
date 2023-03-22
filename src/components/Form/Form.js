import './Form.css';
import TextInput from '../TextInput'
import SelectInput from '../SelectInput';
import Button from '../Button';
import { useState } from 'react';

export function Form() {

    const teams = [
        'Loud',
        'Furia',
        'ODDK',
        'Cloud9',
        'NIP',
        'Sentinels',
        'Team Liquid'
    ];

    const [name, setName] = useState('');
    const [agent, setAgent] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    function submit(event) {
        event.preventDefault();
        console.log(`Vou submeter o formulário: ${name}, ${agent}, ${image}, ${team}`);
    }

    return (
        <section className='form'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do player</h2>
                <TextInput
                    mandatory={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    value={name}
                    whenEdited={value => setName(value)}
                />
                <TextInput
                    mandatory={true}
                    label='Agente'
                    placeholder='Digite sua classe de agente'
                    value={agent}
                    whenEdited={value => setAgent(value)}
                />
                <TextInput
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    value={image}
                    whenEdited={value => setImage(value)}
                />
                <SelectInput
                    mandatory={true}
                    label='Organização'
                    itens={teams} 
                    value={team}
                    whenEdited={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}