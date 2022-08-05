import Search from './components/Search'
import GetIssues from './components/GetIssues'
import { useState } from 'react';
import './styles/App.css'

function App() {

  const [link, setLink] = useState('')

  return (
    <div className='App App-header'>
      <Search setLink={setLink}/>
      {
        link && <GetIssues link={link} />
      }
    </div>

  );
}

export default App;
