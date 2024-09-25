import Home from "./pages/home/Home";
import Webboard from "./pages/webboard/Webboard";
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/Signup';
import Like from './pages/like/Like';
import Notification from './pages/notification/Notification';
import Page from './pages/page/Page';
import Profile from './pages/profile/Profile';

import Recommended from './pages/recommend/Recommended';
import Reply from "./pages/webboard/Reply";
import Footprint from "./pages/profile/Footprint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  document.body.style.overflow = "hidden";
  return (
    <div className="w-screen h-screen font-Mitr">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webboard" element={<Webboard />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/like" element={<Like/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/page" element={<Page/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/recommended" element={<Recommended/>}/>
            <Route path="/reply" element={<Reply/>}/>
  
            <Route path="/footprint" element={<Footprint/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
