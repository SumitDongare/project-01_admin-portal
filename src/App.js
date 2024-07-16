
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginComponent from './auth/LoginComponent';
import PagesComponent from './pages/PagesComponent';


function App() {
  return (
  <div className='app-component' >
    <Routes>
      <Route path='/' element={<Navigate to="/pages" replace={true} />}  ></Route>
       <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
       <Route path='pages' element={<PagesComponent></PagesComponent>}></Route>

    </Routes>
        
       
       
  </div>
  );
}

export default App;
