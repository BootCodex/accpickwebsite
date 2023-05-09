import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Become the tended active',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Really boy law county',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
]

const Features = () => {
  return (
    <div className='accpick__features section__padding' id='features'>
        <div className="accpick__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
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