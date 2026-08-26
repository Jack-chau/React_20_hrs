import './index.css';
import Employee from './components/Employee';
import { useState } from 'react' ;
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ role, setRole ]  = useState( 'intern' ) ;
  const [ employees, setEmployee ] = useState( 
    [
      { 
        name : "Marry", 
        role : "Intern", 
        img : "https://images.pexels.com/photos/13198305/pexels-photo-13198305.jpeg"
      },
      {
        name : "Joey",
        role : "Cybersecurity Engineer" ,
        img : "https://images.pexels.com/photos/8474013/pexels-photo-8474013.jpeg"
      },
      {
        name : "Lora" ,
        role : "Network Engineer" ,
        img : "https://images.pexels.com/photos/13953676/pexels-photo-13953676.jpeg"
      },
      {
        name : "May" ,
        role : "Backend Developer" ,
        img : "https://images.pexels.com/photos/15231608/pexels-photo-15231608.jpeg"        
      },
      {
        name : "Candy" ,
        role : "Product Engineer" ,
        img : "https://images.pexels.com/photos/14220693/pexels-photo-14220693.jpeg"
      },
      {
        name : "Tony" ,
        role : "System Engineer" ,
        img : "https://images.pexels.com/photos/6836496/pexels-photo-6836496.jpeg"
      },
      {
        name : "Happy" ,
        role : "Front-end Developer",
        img : "https://images.pexels.com/photos/2354863/pexels-photo-2354863.jpeg"
      }
    ]
  ) ;
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
            <div className="flex flex-wrap justify-center">
              { employees.map(( employee ) => {
                return(
                  <Employee
                    key = { uuidv4() }
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
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