import {Routes,Route, BrowserRouter as Router}from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <Router>
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
      
    </Router>
  )
}

export default App
