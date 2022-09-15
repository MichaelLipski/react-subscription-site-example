import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Subscriptions from './pages/Subscriptions';
import NavBar from './NavBar';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div class='main-page-design'>
          <Routes>
            <Route exact path='/' element={ <HomePage/> } />
            <Route exact path='/subscriptions' element={ <Subscriptions/> } />
            <Route exact path='/productlist' element={ <ProductList/> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
