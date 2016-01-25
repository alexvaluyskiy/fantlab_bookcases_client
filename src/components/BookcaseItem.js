import React from 'react';
import 'font-awesome/scss/font-awesome.scss';

export const BookcaseItem = ({
  bookcase,
  onViewClick,
  onEditClick,
  onDeleteClick
}) => {
  return <li className='bookcase_item' onClick={(e) => {
      onViewClick(e, bookcase.bookcase_id);
    }}>
    <div className={`bookcase_icon ${bookcase.type}`}></div>
    <h3>{bookcase.name}</h3>
    <p>{bookcase.description}</p>
    <span className='bookcase_count'>{bookcase.books_count || 0} шт.</span>
    <i className='bookcase_close fa fa-times' onClick={() => {
      e.stopPropagation();
      onDeleteClick(bookcase.bookcase_id);
    }}></i>
    <i className='bookcase_edit fa fa-pencil-square-o' onClick={(e) => {
      e.stopPropagation();
      onEditClick(bookcase.bookcase_id);
    }}></i>
  </li>;
};
