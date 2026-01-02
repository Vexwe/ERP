import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Support/Login'
import Home from './pages/home/home'
import Estoque from './pages/Estoque/Estoque'
import Center  from './pages/Center/Center'
import Forget from './pages/Support/Forget'
import Register from './pages/Support/Register'
import KanbanBoard from './components/KanBan/KanbanBoard'

function App() {
  return (
  <>
  <Router>
  <Routes>
  <Route path='/' element={<Home/>}/>  
  <Route path='/login' element={<Login/>}/> 
  <Route path='/estoque' element={<Estoque/>}/>
  <Route path='/center' element={<Center/>}/>
  <Route path='/forget' element={<Forget/>}/>
  <Route path='/register' element={<Register/>}/> 
  <Route path='/kanban' element={<KanbanBoard/>}/> 
  </Routes>  
  </Router>
  </>
  )
}

export default App
