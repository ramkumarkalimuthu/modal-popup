import './App.css';
import { useState } from 'react';
import Modal from './compentent/Modal';

function App() {
  const [openpopup, SetOpenPopup] = useState(false);
  return (
    <div className="App">
      <div className='container'> 
      <h1 className='contactnav'>My Contact</h1>
      <button className='openmodal' onClick={() => SetOpenPopup(true)}>Add Contact</button>
      </div>
    { openpopup && <Modal ClosePopup={SetOpenPopup} />} 
    </div>
  );
}

export default App;
