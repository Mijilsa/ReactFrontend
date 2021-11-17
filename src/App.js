import react from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateTaskComponent from './components/CreateTaskComponent';
import ListTaskComponent from './components/ListTaskComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
//import { Router, Route } from 'react-router';


function App() {

  return (
    <html>
    
    <body className="Logo" style={{ minHeight: '100vh'}}>
      <CreateTaskComponent/><br/><br/>
        <Router>
                <div className="container">
                    <Routes> 
                          <Route path = '/' exact element={<ListTaskComponent/>}></Route>

                    </Routes>
                </div>
        </Router>
    </body>
    </html>
  );
}

export default App;
