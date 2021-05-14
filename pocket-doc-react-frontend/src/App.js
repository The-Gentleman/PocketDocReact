import './App.css';
import Header from './components/Header.js'
import PatientList from './components/PatientList.js'
import { Switch, Route, Link } from 'react-router-dom' 

function App() {
  return (
   
      <div className="App">
        <div>
        <Link to="/patients">Patients</Link> | <Link to="/Home">Home</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/patients" component={PatientList} />
          <Header />
          <PatientList patientName="" />
        </Switch>
      </div>
    
  );
}

export default App;
