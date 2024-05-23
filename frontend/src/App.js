import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginComponent from './components/Login';
import DashboardComponent from './components/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/login'>Login</Link></li>      
      </ul>
    
    
    
      <Routes>
      <Route path='/login' element={<LoginComponent/>}/>
      <Route path='/dashboard' element={<DashboardComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
