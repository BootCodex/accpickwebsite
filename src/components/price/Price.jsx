import React, { useState } from 'react';
import './price.css';

function Price() {

  const handleButtonClick = () => {
    const subject = encodeURIComponent('Your default email subject');
    const to = encodeURIComponent('admin@accpick.co.za', 'tech2@accpick.co.za');
    const mailtoLink = `mailto:${to}?subject=${subject}`;

    // Open the default email client
    window.location.assign(mailtoLink);
  };

  const [pricing] = useState([
    {
      title: 'Bronze',
      price: 'R594',
      currency: '$',
      amount: '32',
      description: 'SINGLE STORE',
      features: [
                 '2 Tills',
                 'Point of Sale',
                 'Stock Control',
                 'Debtors',
                 'Creditors',
                 'And more',                 
                ],
          
      support: ['Call Center Limited', 'WhatsApp'],
      equipmentSupport: 'Extensive equipment support',
      operatingSystem: ['Windows,7,8,10', 'Virtual Box'],
    },
    {
      title: 'Silver',
      price: 'R965',
      currency: '$',
      amount: '52',
      description: 'MEDIUM STORE',
      features: [
                 '4 Tills',
                 'Point of Sale',
                 'Stock Control',
                 'Debtors',
                 'Creditors',
                 'And more',                 
                ],
      support: ['Call Center Limited', 'WhatsApp'],
      equipmentSupport: 'Extensive equipment support',
      operatingSystem: ['Windows,7,8,10', 'Virtual Box'],
    },
    {
      title: 'Gold',
      price: 'R2078',
      currency: '$',
      amount: '112',
      description: 'MULTI STORE',
      features: ['Multi Warehouse',
                 'Unlimited Tills',
                 'Point of Sale',
                 'Stock Control',
                 'Debtors',
                 'Creditors',
                 'And many more',
                 
                ],
      support: ['Call Center: UnLimited', 'WhatsApp'],
      equipmentSupport: 'Extensive equipment support',
      operatingSystem: ['Windows7,8,10', 'Virtual Box'],
    },
  ]);

  return (
    <div className='accpick__price section__margin' id='price'>
      {pricing.map((tier, index) => (
        <div className="box" key={index}>
          <div className={`accpick__price-head${tier.title.toLowerCase()}`}>
            <h3>{tier.title}</h3>
          </div>
          <div className='accpick__price-price'>
            {/* <h4>{`${tier.price} = ${tier.currency}${tier.amount}`}</h4> */}
          </div>
          <div className='accpick__price-des'>
            
            <p className='price_description'>{tier.description}</p>
            <ul>
              {tier.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <ul>
                {tier.support.map((supportItem, idx) => (
                  <li key={idx}>{supportItem}</li>
                ))}
            </ul>
            {/* <p><strong>Equipment Support:</strong> {tier.equipmentSupport}</p> */}
            <p><strong>Operating System:</strong> {tier.operatingSystem}</p>
            <button type='button' className='get-quote-btn' onClick={handleButtonClick}>Get a Quote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Price;
