import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

   const [collaborators, setCollaborator] = useState('')

   function addCollaborator(collaborator) {
      console.log(collaborator);
      setCollaborator([...collaborators, collaborator])
   }

   return (
      <div className="App">
         <Banner />
         <Form 
            whenRegisterCollaborator={collaborator => addCollaborator(collaborator)}
         />
      </div>
   );
}

export default App;
