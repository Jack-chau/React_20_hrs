import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react' ;
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

function Employees() {
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

  function newEmployee( name, role, img ) {
    const newEmployee = {
      id : uuidv4(),
      name : name,
      role : role,
      img : img,
    }
    setEmployees( [...employees, newEmployee ])
  }

  const showEmployees = true;

  return (
    <div className="">
      { showEmployees ? 
        <div>
            <div className="flex flex-wrap justify-center">
              { employees.map(( employee ) => {
                const editEmployee = <EditEmployee
                                         id = { employee.id }
                                         name = { employee.name }
                                         role = { employee.role } 
                                         updateEmployee = { updateEmployee } >
                                      </EditEmployee>;
                return(
                  <Employee
                    key = { employee.id }
                    id = { employee.id }
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                    editEmployee = { editEmployee }
                  />
                )
                }) 
              }
            </div>
            <div>
              <AddEmployee
                newEmployee = { newEmployee }
              />
            </div>
        </div>
      :
      <p>Yout cannot see the employees</p>

      }
    </div>
  );
}

export default Employees;