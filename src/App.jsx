import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Support/Login'
import Home from './pages/home/home'
import Estoque from './pages/Estoque/Estoque'
import Center  from './pages/Center/Center'
import Forget from './pages/Support/Forget'
import Register from './pages/Support/Register'
function App() {
  return (
  <>
  <Router>
  <Routes>
  <Route path='/' element={<Login/>}/> 
  <Route path='/home' element={<Home/>}/>  
  <Route path='/estoque' element={<Estoque/>}/>
  <Route path='/center' element={<Center/>}/>
  <Route path='/forget' element={<Forget/>}/>
  <Route path='/register' element={<Register/>}/>    
  </Routes>  
  </Router>
  </>
  )
}

export default App
