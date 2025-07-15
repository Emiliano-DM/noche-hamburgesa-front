import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile'
import Events from '../pages/Events'
import UserProvider from '../providers/UserProvider.jsx';

const Router = () => (
 
    <BrowserRouter>
     <UserProvider>
        <Layout>
          <Routes>   
              <Route path='/' element={<Home/>} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/events' element={<Events />} />
              <Route path="*" element={<div>404</div> } />
          </Routes>
      </Layout>
      </UserProvider>
    </BrowserRouter>
);

export default Router;