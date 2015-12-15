import React from 'react';
import 'font-awesome/scss/font-awesome.scss';

export const BookcaseItem = ({
  bookcase,
  onDeleteClick
}) => {
  return <li className='bookcase_item'>
    <div className={`bookcase_icon ${bookcase.type}`}></div>
    <h3>{bookcase.name}</h3>
    <p>{bookcase.description}</p>
    <span className='bookcase_count'>{bookcase.bookcount} шт.</span>
    <i className='bookcase_close fa fa-times' onClick={() => {
      onDeleteClick(bookcase.bookcase_id);
    }}></i>
    <i className='bookcase_edit fa fa-pencil-square-o'></i>
  </li>;
};
