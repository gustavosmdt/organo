import './Form.css';
import TextInput from '../TextInput'
import SelectInput from '../SelectInput';

export function Form() {

    const teams = [
        'Loud',
        'Furia',
        'ODDK',
        'Cloud9',
        'NIP',
        'Sentinels',
        'Team Liquid'
    ]

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do player</h2>
                <TextInput label='Nome' placeholder='Digite seu nome' />
                <TextInput label='Agent' placeholder='Digite sua classe de agente' />
                <TextInput label='Imagem' placeholder='Digite o endereço da imagem' />
                <SelectInput itens={teams} />
            </form>
        </section>
    );
}