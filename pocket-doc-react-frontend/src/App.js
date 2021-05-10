import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import PatientList from './components/PatientList.js'

function App() {
  return (
    <div className="App">
      <Header />
      <PatientList />
    </div>
  );
}

export default App;
