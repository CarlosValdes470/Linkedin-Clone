import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div  className='widgets'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newsArticle('Learning Frontend', 'Best hiring managers visit this page')}
        {newsArticle('React/Redux is great!', 'Everyone agrees - 440 readers')}
        {newsArticle('Firebase is AMAZING!', 'Catching on fire! - 9000 readers')}
        {newsArticle('Avoid prop drilling!', 'Beginner Tips - 230 readers')}
        {newsArticle('Tailwindcss', 'A chilly draft - 4534 readers')}
    </div>
  );
}

export default Widgets