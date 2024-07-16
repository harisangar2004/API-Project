import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import UsersList from './components/user/UsersList'
import CreateUser from './components/user/CreateUser'
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";
import RemoveUser from './components/user/RemoveUser';


const App =  () => {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersList/>}/>
              <Route path="/create" element={<CreateUser/>}/>
              <Route path="/:userId" element={<RetrieveUser/>} />
              <Route path="/edit/:userId" element={<EditUser/>} />
              <Route path="/remove/:userId" element={<RemoveUser/>} />
            </Routes>
          </BrowserRouter>
    </>
  )
}


export default App;
