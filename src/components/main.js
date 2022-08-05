import '../styles/App.css';
import GetIssues from './GetIssues';
import { useState } from 'react';


function App() {

    const [link, setLink] = useState('')
    const [inputValue, setInputValue] = useState('')

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className='search'>
                    <input type="text" id="link" className='searchInput' onChange={onChange} />
                    <button className='button' onClick={() => {
                        setLink(inputValue)
                    }}>SEARCH</button>
                </div>

                <GetIssues props={link} />

            </header>
        </div>
    );
}

export default App;