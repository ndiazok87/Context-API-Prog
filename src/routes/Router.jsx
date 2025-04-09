import { BrowserRouter, Routes, Route } from 'react-router-dom';    
import Home from '../views/Home.jsx';
import UnicornTableView from '../views/UnicornTableView.jsx';
import UnicornCreateView from '../views/UnicornCreateView.jsx';
import UnicornEditView from '../views/UnicornEditView.jsx';


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/unicorns/table' element={< UnicornTableView/>}/>
      <Route path='/unicorns/create' element={< UnicornCreateView/>}/>
      <Route path='/unicorns/edit/:id' element={< UnicornEditView />}/>
    </Routes>
  </BrowserRouter>
);

export default Router;
