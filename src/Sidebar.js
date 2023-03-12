import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://vinsweb.org/wp-content/uploads/2020/04/AtHome-NightSky-1080x810-1.jpg' alt='Night Sky' />
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Profile views</p>
                    <p className='sidebar_statNumber'>6,900</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on posts</p>
                    <p className='sidebar_statNumber'>4,200</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('tailwindcss')}
                {recentItem('javascript')}
                {recentItem('react')}
                {recentItem('firebase')}
            </div>
        </div>
    );
}

export default Sidebar