import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile'
import Events from '../pages/Events'
import CreateEvent from '../pages/CreateEvent'
import UserProvider from '../providers/UserProvider.jsx';
import { EventProvider } from '../providers/EventContext.jsx';
import Error404 from '../pages/Error404/Error404.jsx';

const Router = () => (
 
    <BrowserRouter>
     <UserProvider>
        <EventProvider>
            <Layout>
                <Routes>   
                    <Route path='/' element={<Home/>} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/create-event' element={<CreateEvent/>}/>
                    <Route path='/events/:id' element={<Events />} />
                    <Route path="*" element={<Error404/> } />
                </Routes>
            </Layout>
        </EventProvider>
      </UserProvider>
    </BrowserRouter>
);

export default Router;