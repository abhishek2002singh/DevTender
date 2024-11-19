import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// Component imports
import Prelogin from './component/Prelogin';
import Body from './component/Body';
import Login from './component/Login';
import Profile from './component/Profile';
import Feed from './component/Feed';
import EditProfile from './component/EditProfile';
import Connection from './component/Connection';
import Request from './component/Request';
import About from './component/About';
import Skills from './component/Skills';
import Jobs from './Jobs';
import Contact from './component/Contact';
import PreLoginHandle from './component/PreLoginHandle';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Prelogin route */}
          <Route path="/" element={<PreLoginHandle />} />
          <Route path="login" element={<Login />} />

          {/* Main app routes */}
          <Route path="/app" element={<Body />}>
            <Route index element={<Feed />} /> {/* Default child */}
            
            <Route path="profile" element={<Profile />} />
            <Route path="EditProfile" element={<EditProfile />} />
            <Route path="connection" element={<Connection />} />
            <Route path="request" element={<Request />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
