import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import AddReviews from './Pages/AddReviews';
import Favorites from './Pages/Favorites';
import Layout from './Components/Navigation/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-reviews' element={<AddReviews />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
