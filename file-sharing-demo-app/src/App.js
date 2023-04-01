import React from 'react';
import './App.css';
import './index.css';

function App() {
  return (
    <div >
      <div className='test'>
        <h1>
          File Sharing
        </h1>
      </div>
      <div className='button'>
        <div className='clicky'>
          Upload
        </div>
      </div>

      <div >
        <h2 className='center'>
          Incoming Files
        </h2>

        <div className='content'>
          <h3>
            Name of download
          </h3>
          <div className='downloadButton'>
            <div className='down'>
              Download
            </div>
          </div>
        </div>
          
      </div>

    </div>
  );
};
export default App;
