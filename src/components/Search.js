import '../styles/App.css';
import { useState } from 'react';


function App({ setLink }) {
    const [inputValue, setInputValue] = useState('')

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='search'>
            <input type="text" id="link" className='searchInput' value={inputValue} onChange={onChange} />
            <button className='button' onClick={() => {
                setLink(inputValue)
            }}>SEARCH</button>
        </div>
    );
}

export default App;