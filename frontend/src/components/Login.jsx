import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode';
import { client } from '../client';

const Login = ()=> {
const navigate = useNavigate();
const responseGoogle = (response)=>{
localStorage.setItem('user', response.credential)
const decoded  = jwt_decode(response.credential);
const {name, picture, sub } = decoded;


    const doc = {
         _id:sub,
         _type: 'user',
         userName: name,
         image: picture,
     }
     client.createIfNotExists(doc)
     .then(()=>{
        navigate('/', {replace: true})
     })
 }

  return (

    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video 
            src={shareVideo}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
            />
            
        </div>
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <div className='p-5'>
                <img src={logo} width='130px' alt='logo'/>
            </div>
            <div className='shadow-2x1'>
                <GoogleLogin  
                onSuccess={(response)=> responseGoogle(response)} 
                onError={(response)=> console.log('error')} 
                type='standard' 
                shape='rectangular'
                theme='filled_blue'
                text='signin_with'
                size='medium'/>           
            </div>
            </div>
    </div>
    
  )
}

export default Login;