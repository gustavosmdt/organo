import './Form.css';
import TextInput from '../TextInput'
import SelectInput from '../SelectInput';
import Button from '../Button';

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

    function submit(event) {
        event.preventDefault();
        console.log('Vou submeter o formulário');
    }

    return (
        <section className='form'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do player</h2>
                <TextInput mandatory={true} label='Nome' placeholder='Digite seu nome' />
                <TextInput mandatory={true} label='Agente' placeholder='Digite sua classe de agente' />
                <TextInput label='Imagem' placeholder='Digite o endereço da imagem' />
                <SelectInput label='Organização' itens={teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}