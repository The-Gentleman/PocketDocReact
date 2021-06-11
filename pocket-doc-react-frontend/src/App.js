import './App.css';
import Header from './components/Header.js'
import PatientList from './components/PatientList.js'
import PatientCard from './components/PatientCard.js'
import PatientCardContainer from './container/PatientCardContainer.js'
import DiagnosisFormContainer from './container/DiagnosisFormContainer.js'
import NoRoute from './components/NoRoute.js'
import { Switch, Route, Link } from 'react-router-dom' 

function App() {
  return (
      <div className="App">
        <div>
        <Link to="/home">Home</Link> | <Link to="/patients">Patients</Link>  
        </div>
        <Switch>
          <Route exact path="/home" component={Header} />
          <Route exact path="/patients" component={PatientList} />
          <Route exact path="/patients/:id" component={PatientCardContainer} />
          <Route exact path="/patients/:id" component={DiagnosisFormContainer} />
          <Route component={NoRoute}/>
          <Header />
          <PatientList />
          <PatientCard />
          <PatientCardContainer />
          <DiagnosisFormContainer />
        </Switch>
      </div>
  );
}

export default App;
