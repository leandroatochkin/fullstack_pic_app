import { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { fetchUser } from './utils/fetchUser';

const token = '370475098814-5iq71h0dp0hd9iiq5cjlq06bjakp9g42.apps.googleusercontent.com'


const App = () => {

const navigate = useNavigate();

useEffect(() => {
  const user = fetchUser();
  if (!user) navigate('/login')

  
}, [])


  return (
    <GoogleOAuthProvider clientId={token}>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/*' element={<Home/>}/>
        </Routes>
        </GoogleOAuthProvider>
    
  );
}

export default App;
