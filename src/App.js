import './index.css';
import Employee from './components/Employee';
import { useState } from 'react' ;
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ role, setRole ]  = useState( 'intern' ) ;
  const [ employees, setEmployees ] = useState(
    [
      { 
        id : 1,
        name : "Marry",
        role : "Intern",
        img : "https://images.pexels.com/photos/13198305/pexels-photo-13198305.jpeg"
      },
      {
        id : 2,
        name : "Joey",
        role : "Cybersecurity Engineer" ,
        img : "https://images.pexels.com/photos/8474013/pexels-photo-8474013.jpeg"
      },
      {
        id : 3,
        name : "Lora" ,
        role : "Network Engineer" ,
        img : "https://images.pexels.com/photos/13953676/pexels-photo-13953676.jpeg"
      },
      {
        id : 4,
        name : "May" ,
        role : "Backend Developer" ,
        img : "https://images.pexels.com/photos/15231608/pexels-photo-15231608.jpeg"        
      },
      {
        id : 5,
        name : "Candy" ,
        role : "Product Engineer" ,
        img : "https://images.pexels.com/photos/14220693/pexels-photo-14220693.jpeg"
      },
      {
        id : 6,
        name : "Tony" ,
        role : "System Engineer" ,
        img : "https://images.pexels.com/photos/6836496/pexels-photo-6836496.jpeg"
      },
      {
        id : 7,
        name : "Happy" ,
        role : "Front-end Developer",
        img : "https://images.pexels.com/photos/2354863/pexels-photo-2354863.jpeg"
      }
    ]
  ) ;
  function updateEmployee ( id, newName, newRole ) {
    const updatedEmployees = employees.map( ( employee ) => {
      if ( id == employee.id ) {
        return { ...employee, name : newName, role : newRole } ;
      } ;
      return employee ;
    } );
    setEmployees( updatedEmployees )
  }
  const showEmployees = true;

  return (
    <div className="App">
      { showEmployees ? 
        <div>
            <div className="flex flex-wrap justify-center">
              { employees.map(( employee ) => {
                return(
                  <Employee
                    key = { employee.id }
                    id = { employee.id }
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                    updateEmployee = { updateEmployee }
                  />
                )
                }) 
              }
            </div>
        </div>
      :
      <p>Yout cannot see the employees</p>

      }
    </div>
  );
}

export default App;