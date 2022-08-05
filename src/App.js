import './App.css';
import GetIssues from './GetIssues';
import SetComment from './SetComment';
import { useState } from 'react';


function App() {
  
  const [link, setLink] = useState('')

  return (
    <div className="App">
      <header className="App-header">
      <div className='search'>
        <input type="text" id="link" className='searchInput'/>
        <button className='button' onClick={() => {
          setLink(document.getElementById("link").value)
        }}>SEARCH</button>
      </div>
      
      <GetIssues props={link}/>

      </header>
    </div>
  );
}

export default App;
