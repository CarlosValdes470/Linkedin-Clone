import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    };

    const register = () => {
        if(!name){
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                }));
            });
        }).catch(error => alert(error));
    };

  return (
    <div className='login'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png' alt='Linkedin Logo' />

        <form>
            <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)'></input>
            <input type='text' value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile picture URL (optional)'></input>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required></input>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required></input>
            <button type='submit' onClick={loginToApp} >Sign In</button>
            <p>Not a member?
                <span className='login_register' onClick={register} >Register Now</span>
            </p>
        </form>
    </div>
  )
}

export default Login