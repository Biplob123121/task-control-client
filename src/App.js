import { Route, Routes } from 'react-router-dom';
import Login from '../src/components/Login/Login'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
