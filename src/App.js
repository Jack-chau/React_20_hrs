import './App.css';
import Employee from './components/Employee';
import { useState } from 'react' ;

function App() {
  const [ role, setRole ]  = useState( 'dev' ) ;
  const showEmployees = true;
  return (
    <div className="App">
      { showEmployees ? 
        <div>
          <input type="text" onChange=
            { 
              ( e ) => {
                console.log( e.target.value ) ;
                setRole( e.target.value );
              }
            }
          />
            <Employee name = "Jack" role = "Intern"/>
            <Employee name = "Test" role = {role}/>
            <Employee />
            <Employee />
            <Employee />
        </div>
      :
      <p>Yout cannot see the employees</p>

      }
    </div>
  );
}

export default App;