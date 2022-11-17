import React, { useState, FC } from 'react';
import './App.css';
import { Form } from "./components/Form"
import { InfoList } from "./components/InfoList"
import { ITicket } from "./types/types"
import { IAction } from "./types/types"
import { state } from "./state/state"
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  const [ticket, setTicket] = useState<ITicket>(state.ticket) 

  const reducer = (action: IAction, state = ticket) => {
    setTicket({...state, ...action})
    
  }
  

  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Form setTicket={reducer}/>}/>
        <Route path='/avia/info' element={<InfoList ticket={ticket}/>}/>
      </Routes>
    </div>
  );
}

export default App;
