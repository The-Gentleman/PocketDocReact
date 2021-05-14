import './App.css';
import Header from './components/Header.js'
import PatientList from './components/PatientList.js'
import { Switch, Route } from 'react-router-dom' 

function App() {
  return (
   
      <div className="App">
        <Switch>
          <Route exact path="/patients" component={PatientList} />
          <Header />
          <PatientList patientName="" />
        </Switch>
      </div>
    
  );
}

export default App;
