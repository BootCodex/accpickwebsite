import React from 'react';
import { Feature } from '../../components';
import accpickDocs from '../../assets/AccpickDocs/Accpick-detailed-list.pdf';
import './accpickpos.css';

const AccpickPos = () => {
  return (
    <div className='accpick__accpickpos section__margin' id='accpickpos'>
      <div className='accpick__accpickpos-feature'>
          <Feature title="AccpickPoS" text="With over 35 years of company experience in Point of Sale and IT, 
          and combined staff experience in Point of Sale, the software continues to reflect our
           experience in the Point of Sale market in Southern Africa,
          in particular our specialist knowledge in the automotive fitment sector.          
          Stability, system controls, inventory management and on-line sales,
          marketing management information, in line with GAAP" />
      </div>
      <div className='accpick__accpickpos-heading'>
        <h1 className='color-subtext_black'>The Possibilities Are Beyond Your Imagination</h1>
        <p className='accpick__accpickpos-explore'><a href={accpickDocs} target='_blank' rel='noopener noreferrer'>Explore Accpick</a></p>
      </div>
      <div className='accpick__accpickpos-container'>
        <Feature title="OverView" text="An overview of how accpick is simple, user friendly and ease to Learn " />
        <Feature title="Accpick Knowledge Base" text="will assist you in gaining experience,
        using a variety of solutions that automate manual and time consuming in day to day business.        
        From Accounting, to Reporting, and more, we offer all you need." />
        <Feature title="Accpick Basics " text="AccpickPos  is based on a graphical representation of icons that
         enable efficient navigation through the program and the manual. 
         Both the program and the manual are also subdivided into modules – each module representing 
         a specific accounting procedure" />
      </div>
    </div>
  )
}

export default AccpickPos