import React, { PropTypes } from 'react';
import { BookcaseItem } from 'components/BookcaseItem';

export const BookcaseList = ({
  bookcases,
  group,
  onDeleteClick
}) => {
  return (<div>
    <h2>Книжные полки {group === 'work' ? 'произведений' : 'изданий'}</h2>
    <ul className="bookcase_list">
    {bookcases.filter(bookcase => bookcase.group === group).sort((a, b) => a.order > b.order).map(bookcase =>
      <BookcaseItem key={bookcase.bookcase_id} bookcase={bookcase} onDeleteClick={onDeleteClick} />
    )}
    </ul>
  </div>);
}
