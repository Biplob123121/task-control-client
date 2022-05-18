import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Shared/Header';
import Login from './components/Login/Login';
import './App.css';
import SignUp from './components/Login/SignUp';
import AddTask from './components/AddTask';
import DelTask from './components/DelTask';
import RequireAuth from './components/Login/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/addtask' element={<RequireAuth>
          <AddTask></AddTask>
        </RequireAuth>}></Route>
        <Route path='/deltask' element={<RequireAuth>
          <DelTask></DelTask>
        </RequireAuth>}></Route>
      </Routes>
    </>
  );
}

export default App;
