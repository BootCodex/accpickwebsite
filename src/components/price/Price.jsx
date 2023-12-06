import React, { useState } from 'react';
import './price.css';

function Price() {
  const [pricing] = useState([
    {
      title: 'Bronze',
      price: 'R594',
      currency: '$',
      amount: '32',
      description: 'SINGLE STORE',
      features: ['Point of Sale',
                 '2 Tills',
                 'Stock Control',
                 'Debtors',
                 'Creditors',
                 'Purchase Orders',
                 'Job Cards',
                 'LayByes',
                 'CashBook',
                 'General Ledger',
                 'Vat Report',
                 'SMS',
                 'Return Warranty Stock To Supplier',
                 'Management Reports',
                 'Email Documents',
                 'Price Update Service'
                ],
          
      support: ['Call Center Limited', 'WhatsApp'],
      equipmentSupport: 'Extensive equipment support',
      operatingSystem: ['Windows,XP,7,8,10', 'Virtual Box'],
    },
    {
      title: 'Silver',
      price: 'R965',
      currency: '$',
      amount: '52',
      description: 'MEDIUM STORE',
      features: ['Point of Sale',
                 '4 Tills',
                 'Stock Control',
                 'Debtors',
                 'Creditors',
                 'Purchase Orders',
                 'Job Cards',
                 'LayByes',
                 'CashBook',
                 'General Ledger',
                 'Vat Report',
                 'SMS',
                 'Return Warranty Stock To Supplier',
                 'Management Reports',
                 'Email Documents',
                 'Price Update Service'
                ],
      support: ['Call Center Limited', 'WhatsApp'],
      equipmentSupport: 'Extensive equipment support',
      operatingSystem: ['Windows,XP,7,8,10', 'Virtual Box'],
    },
    {
      title: 'Gold',
      price: 'R2078',
      currency: '$',
      amount: '112',
      description: 'MULTI STORE',
      features: ['Multi Warehouse',
                 'Stock on hand comparison store vs store',
                 'Stock group ordering',
                 'Stock Inter store Transfers',
                 'Inter-branch messaging system',
                 'Debtors consolidated all stores',
                 'Creditors consolidated all stores',
                 'Cashbook consolidated all stores',
                 'General ledger consolidated all stores',
                 'Point of Sale',
                 'Unlimited Tills',
                 'Stock Control',
                 'Debtors',
                 'Creditors',
                 'Purchase Orders',
                 'Job Cards',
                 'LayByes',
                 'CashBook',
                 'General Ledger',
                 'Vat Report',
                 'SMS',
                 'Return Warranty Stock To Supplier',
                 'Management Reports',
                 'Email Documents',
                 'Price Update Service'
                ],
      support: ['Call Center Limited', 'WhatsApp'],
      equipmentSupport: 'Extensive equipment support',
      operatingSystem: ['Windows,XP,7,8,10', 'Virtual Box'],
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
            <h4>{`${tier.price} = ${tier.currency}${tier.amount}`}</h4>
          </div>
          <div className='accpick__price-des'>
            
            <p>{tier.description}</p>
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
            <p><strong>Equipment Support:</strong> {tier.equipmentSupport}</p>
            <p><strong>Operating System:</strong> {tier.operatingSystem}</p>
            <button type='button'>Sign Up</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Price;
