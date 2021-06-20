import './App.css';
import Header from './components/Header.js'
import PatientList from './components/PatientList.js'
import PatientCard from './components/PatientCard.js'
import PatientCardContainer from './container/PatientCardContainer.js'
import UpdatedPatientInfoContainer from './container/UpdatedPatientInfoContainer.js'
import NoRoute from './components/NoRoute.js'
import { Switch, Route, Link } from 'react-router-dom' 

function App() {
  return (
      <div className="App">
        <div className="Nav">
          <strong><Link to="/home">Home</Link> </strong>
          <br></br>
          <br></br>
          <strong><Link to="/patients">Patients</Link> </strong> 
        </div>
        <Switch>
          <Route exact path="/home" component={Header} />
          <Route exact path="/patients" component={PatientList} />
          <Route exact path="/patients/:id" component={PatientCardContainer} />
          <Route exact path="/patients/:id/diagnosis" component={UpdatedPatientInfoContainer} />
          <Route component={NoRoute}/>
          <Header />
          <PatientList />
          <PatientCard />
          <PatientCardContainer />
          <UpdatedPatientInfoContainer />
        </Switch>
      </div>
  );
}

export default App;
