import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Call +27 33-343-6000',
    text: 'A real Human attendant will answer the call and log support ticket.'
  },
  {
    title: 'Accpick Engineer',
    text: 'Will phone you at Accpick`s cost he or she will request connection with your permission to connect, they will fix the issue.'
  },
  {
    title: 'Use WhatsApp +27 76-9188-228',
    text: 'To give our support team access to your computer to assist you we use whatsapp to send TeamViewer ID and Password  .'
  },
  {
    title: 'TeamViewer',
    text: 'Download and install TeamViewer version 10 and above on your computer for us to easily access your computer anywhere you are.'
  },
]

const Features = () => {
  const teamViewer = 'https://www.teamviewer.com/en-us/download/windows/'
  return (
    <div className='accpick__features section__padding' id='features'>
        <div className="accpick__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen</h1>
        <p><a href={teamViewer} target='_blank'>Download TeamViewer Here</a></p>
        </div>
        <div className="accpick__features-container">
            {featuresData.map((item, index) => (
              <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
  )
}

export default Features