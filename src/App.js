import { Box } from '@mui/material';
import React from 'react';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import DetailView from './Components/details/DetailView';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
function App() {
  return (
    <div>
      <BrowserRouter>
     <Header/>
     <Box>
      <Routes>
        

        <Route path='/' element={<Home/>} />
        <Route exact path='/product/:id' element={<DetailView/>} />
        <Route exact path='/cart' element={<Cart/>} />
        
      
      </Routes>
     </Box>
       </BrowserRouter>
    </div>
  )
}

export default App