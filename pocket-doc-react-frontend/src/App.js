import './App.css';
import Header from './components/Header.js'
import PatientList from './components/PatientList.js'

function App() {
  return (
    <div className="App">
      {/* 1 OF 5 */}
      <Header />
      {/* 2 OF 5 */}
      <PatientList patientName="" />
    </div>
  );
}

export default App;
