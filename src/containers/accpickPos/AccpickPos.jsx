import React from 'react';
import { Feature } from '../../components';
import './accpickpos.css';

const AccpickPos = () => {
  return (
    <div className='accpick__accpickpos section__margin' id='accpickpos'>
      <div className='accpick__accpickpos-feature'>
          <Feature title="What is Accpick" text="With over 35 years of company experience in Point of Sale and IT, 
          and combined staff experience in Point of Sale, Internet and IT of 100 years, 
          the software continues to reflect our experience in the Point of Sale market in Southern Africa,
          in particular, our specialist knowledge in the automotive fitment sector.
          Vital to the management and control of any successful business operation, 
          are ease of use, stability, system controls, inventory management and on-line sales,
          marketing management information, in line with GAAP" />
      </div>
      <div className='accpick__accpickpos-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='accpick__accpickpos-container'>
        <Feature title="OverView" text="An overview of how accpick is simple, user friendly and ease to Learn " />
        <Feature title="Accpick Knowledge Base" text="" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. 
        Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default AccpickPos