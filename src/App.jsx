import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForDrivers from './components/ForDrivers/ForDrivers';
import Home from './components/Home/Home';
import ContextProvider from './components/context/Context';
import ForPassengers from './components/ForPassengers/ForPassengers';

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
