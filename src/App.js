import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ manHours, setManHours ] = useState("0")
  const [ storyPoint, setStoryPoint ] = useState("0")
  const calculateRate = (manHours) => {
    setStoryPoint(manHours/8);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          คำนวน Manday | Andaman Studio <br />
          เทียบบัญญัติไตรยางศ์ => 1 วัน (8 ชั่วโมง ) = 1 Manday
          <hr />
          ชั่วโมง/นาที ที่คุณทำงานได้ {manHours} <br />
          ผลการคำนวณ {storyPoint} Manday 
        </p>
         ใส่ ชั่วโมงที่ทำงานได้ <input type="text" onChange={e => setManHours(e.target.value)} />
         <button onClick={() => calculateRate(manHours)}> คำนวณ </button>
      </header>
    </div>
  );
}

export default App;
