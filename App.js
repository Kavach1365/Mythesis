
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Home} from './components/Home'
import { Thesis2 } from './components/Thesis2'
//import { Thesis } from './components/Thesis';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          
        </Route>
        <Route exact path = 'thesis' element = {<Thesis2/>} />
      </Routes>
      </BrowserRouter>
      </>
      

  );
}

export default App;
