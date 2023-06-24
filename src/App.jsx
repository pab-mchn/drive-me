import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ContextProvider from './components/context/Context';
import ForDrivers from './components/ForUsers/ForDrivers';
import ForPassengers from './components/ForUsers/ForPassengers';

function App() {
  return (
    <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/fordrivers' element={<ForDrivers/>}></Route>
            <Route path='/forpassengers' element={<ForPassengers/>}></Route>
          </Routes>
        </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
