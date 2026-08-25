import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = false;
  return (
    <div className="App">
      { showEmployees ? 
        <div>
          <Employee />
          <Employee />
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
