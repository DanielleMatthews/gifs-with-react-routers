import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Error from './Pages/ErrorPage'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Trending from './Pages/Trending'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Random </Link> nsp&&
        <Link to="/trending"> Trending </Link> nsp&&
        <Link to="/search"> Search </Link>
      </nav>
      <Routes>
        <Route path="/"  element={<Home/>}/> 
        <Route path="/trending" element={<Trending/>} /> 
        <Route path="/search" element={<Search/>} /> 
        <Route path="*"  element={<Error/>}/> 
      </Routes>
      <footer> im the foot </footer>
    </Router>
  );
}

export default App;
