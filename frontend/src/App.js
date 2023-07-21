import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Approved_curriculum_admin from './components/Approved_curriculum_admin';
import Approved_curriculum_faculty from './components/Approved_curriculum_faculty';
import Curriculum_approval_faculty from './components/Curriculum_approval_faculty';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import New_request_faculty from './components/New_request_faculty';
import Pending_request_admin from './components/Pending_request_admin';
import Requirement_form_admin from './components/Requirement_form_admin';
import Search_bar from './components/Search_bar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/approvedCurriculumAdmin' element={<Approved_curriculum_admin/>}/>
          <Route path='/approvedCurriculumFaculty' element={<Approved_curriculum_faculty/>}/>
          <Route path='/curriculumApprovalFaculty' element={<Curriculum_approval_faculty/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/NewRequestFaculty' element={<New_request_faculty/>}/>
          <Route path='/pendingRequestAdmin' element={<Pending_request_admin/>}/>
          <Route path='/requirementFormAdmin' element={<Requirement_form_admin/>}/>
          <Route path='/searchBar' element={<Search_bar/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
