import React    from 'react';
import { Link } from 'react-router';

export const BookcaseItem = ({
  bookcase,
  onDeleteClick
}) => {
  return <li className={`bookcase_item ${bookcase.type}`}>
    <Link to={`/bookcases/${bookcase.bookcase_id}`}>{bookcase.name}</Link>
    <span className="description"> ({bookcase.description})</span>
    <span className="order"> (#{bookcase.order})</span>
    <span className="bookcount"> (книг: {bookcase.bookcount})</span>
    <div>
      <button className="btn btn-sm" onClick={() => {
        onDeleteClick(bookcase.bookcase_id);
      }}>Удалить полку</button>
    </div>
  </li>
}
