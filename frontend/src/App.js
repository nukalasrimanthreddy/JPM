
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeComponent from './components/Home';
import LoginComponent from './components/Login';
import DashboardComponent from './components/Dashboard';
import RegisterComponent from './components/Register'
import LogoutComponent from './components/Logout';
import AuthProvider from './components/AuthContext/Auth';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/Home">SustainEats</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to='/dashboard'>Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    
    
      <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/Home' element={<HomeComponent/>}/>
      <Route path='/login' element={<LoginComponent/>}/>
      <Route path='/dashboard' element={<DashboardComponent/>}/>
      <Route path='/register' element={<RegisterComponent/>}/>
      <Route path='/logout' element={<LogoutComponent/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
