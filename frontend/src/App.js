import { Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage/UsersPage';
import NewUserPage from './pages/NewUserPage/NewUserPage';
import UpdateUserPage from './pages/UpdateUserPage/UpdateUserPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<><UsersPage/></>}/>
                <Route path="/newUser" element={<><NewUserPage/></>}/>
                <Route path="/updateUser" element={<><UpdateUserPage/></>}/>
            </Routes>
        </div>
    );
}

export default App;
