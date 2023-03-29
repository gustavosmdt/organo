import { useState } from 'react';
import Banner from './components/Banner';
import { Footer } from './components/Footer/Footer';
import Form from './components/Form';
import { Team } from './components/Team/Team';

function App() {

   const teams = [
      {
         name: 'LOUD',
         colorPrimary: '#82CFFA',
         colorSecondary: '#E8F8FF',
      },
      {
         name: 'Furia',
         colorPrimary: '#A6D157',
         colorSecondary: '#F0F8E2',
      },
      {
         name: 'ODDK',
         colorPrimary: '#E06B69',
         colorSecondary: '#FDE7E8'
      },
      {
         name: 'Cloud9',
         colorPrimary: '#D86EBF',
         colorSecondary: '#FAE5F5',
      },
      {
         name: 'NIP',
         colorPrimary: '#FEBA05',
         colorSecondary: '#FFF5D9',
      },
      {
         name: 'Sentinels',
         colorPrimary: '#FF8A29',
         colorSecondary: '#FFEEDF',
      },
   ];

   const [collaborators, setCollaborator] = useState([]);

   function addCollaborator(collaborator) {
      setCollaborator([...collaborators, collaborator]);
   }

   return (
      <div className="App">
         <Banner />
         <Form
            whenRegisterCollaborator={collaborator => addCollaborator(collaborator)}
            teams={teams.map(team => team.name)}
         />
         {teams.map(team => <Team 
            key={team.name} 
            name={team.name} 
            colorPrimary={team.colorPrimary}
            colorSecondary={team.colorSecondary}
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
         />)}
         <Footer />
      </div>
   );
}

export default App;
