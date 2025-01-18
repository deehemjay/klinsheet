// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Link from './Pages/Homepage/Link';
import Link2 from './Pages/AboutUs/Link2';
import Link3 from './Pages/Request A Quote/Link';
import Link4 from './Pages/Insightpage/Link4';
import Link5 from './Pages/Contactpage/Link5';
import Link6 from './Pages/Academicpage/Link6';
import Link7 from './Pages/Guarantorpage/Link7';
import Link8 from './Pages/Previousemployee/Link8';
import Link9 from './Pages/Nyscverification/Link9';
import Link10 from './Pages/Adressverification/Link10';
import Link11 from './Pages/Creditcheck/Link11';
import Link12 from './Pages/Criminalcheck/Link12';


function App() {
  return (
   <Router> 
    <Routes>
       <Route path='/' element={<Link />} />
       <Route path='/about' element={<Link2 />} />
       <Route path='/request' element={<Link3 />} />
       <Route path='/insight' element={<Link4 />} />
       <Route path='/contactus' element={<Link5 />} />
       <Route path='/academic' element={<Link6 />} />
       <Route path='/guarantor' element={<Link7 />} />
       <Route path='/previousemployee' element={<Link8 />} />
       <Route path='/nyscverification' element={<Link9 />} />
       <Route path='/addressverification' element={<Link10 />} />
       <Route path='/creditcheck' element={<Link11 />} />
       <Route path='/criminalcheck' element={<Link12 />} />
    </Routes>
   </Router>
  );
}

export default App;
