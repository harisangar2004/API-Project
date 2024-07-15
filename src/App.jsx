import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import UsersList from './components/user/UsersList'
import CreateUser from './components/user/CreateUser'
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";


const App =  () => {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersList/>}/>
              <Route path="/create" element={<CreateUser/>}/>
              <Route path="/:userId" element={<RetrieveUser/>} />
              <Route path="/edit/:userId" element={<EditUser/>} />
            </Routes>
          </BrowserRouter>
    </>
  )
}


export default App;
