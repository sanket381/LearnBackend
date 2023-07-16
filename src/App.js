import logo from './logo.svg';
import React , {useEffect,useState}from 'react'
import './App.css';

function App() {

  const [backendDta,setBackendDta] = useState([]);


  useEffect(()=>{
    fetch("/app")
    .then(response => response.json())
    .then(data => {
      console.log("Data:", data);
      setBackendDta(data.user);
    });
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h1>User List Fetch from backend</h1>
        {
          backendDta.map((item)=>{
            return <p> {item}  </p>
          })
        }
       
      </div>
    </div>
  );
}

export default App;
