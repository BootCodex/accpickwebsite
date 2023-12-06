import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, pointOfSale, cashBook, pOrders, debtors, Creditors, GL, Utilities, StockC, } from './imports';


const Blog = () => {
  return (
    <div className='accpick__blog section__padding' id='blog'>
        <div className="accpick__blog-heading">
          <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="accpick__blog-container">
            <div className="accpick__blog-container_groupA">
              <a href={StockC} target='_blank' rel='noopener noreferrer'><Article imgUrl={blog01}  date='Sep 20, 2021' title='AccpickPos Stock Control. Let us explore how it is?'/></a>             
            </div>
            <div className="accpick__blog-container_groupB">
              <a href={pointOfSale} target='_blank' rel='noopener noreferrer'><Article imgUrl={blog02} date='Sep 20, 2021' title='AccpickPos  Point-of-Sale. Let us explore how it is?'/></a>              
              <a href={cashBook} target='_blank' rel='noopener noreferrer'><Article imgUrl={blog03} date='Sep 20, 2021' title='AccpickPos Cash Book. Let us explore how it is?'/></a>
              <a href={Creditors} target='_blank' rel='noopener noreferrer'><Article imgUrl={blog04} date='Sep 20, 2021' title='AccpickPos Creditors. Let us explore how it is?'/></a>
              <a href={debtors}target='_blank' rel='noopener noreferrer'><Article imgUrl={blog05} date='Sep 20, 2021' title='AccpickPos Debtors. Let us explore how it is?'/></a>
              {/* <a href={Utilities}target='_blank' rel='noopener noreferrer'><Article imgUrl={blog06} date='Sep 20, 2021' title='AccpickPos Debtors. Let us explore how it is?'/></a>
              <a href={GL}target='_blank' rel='noopener noreferrer'><Article imgUrl={blog07} date='Sep 20, 2021' title='AccpickPos Debtors. Let us explore how it is?'/></a>
              <a href={debtors}target='_blank' rel='noopener noreferrer'><Article imgUrl={blog08} date='Sep 20, 2021' title='AccpickPos Debtors. Let us explore how it is?'/></a> */}
            </div>
        </div>
    </div>
  )
}

export default Blog